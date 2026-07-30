import React, { useRef, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
  CameraCaptureError,
  Camera,
  type CameraPosition,
  useFrameProcessor,
} from "react-native-vision-camera";
import { Worklets } from "react-native-worklets-core";

import { scanFaces, type Face } from "vision-camera-trustee-face-detector-v3";

export default function FaceDetection() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef<Camera | null>(null);
  const device = useCameraDevice("front");
  const [faces, setFaces] = useState<Face>();
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, [requestPermission]);

  const handleFaceDetection = Worklets.createRunOnJS((face: Face) => {
    setFaces(face);
  });

  const frameProcessor = useFrameProcessor(
    (frame) => {
      "worklet";
      try {
        const scannedFaces: any = scanFaces(frame, {});
        if (Object.keys(scannedFaces).length > 0) {
          handleFaceDetection(scannedFaces);
        }
      } catch (error) {}
    },
    [handleFaceDetection]
  );

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      setFaces(undefined);
      if (faces) {
        const shot = await cameraRef.current.takePhoto({});
        setPhoto(`file://${shot.path}`);
      } else {
        Alert.alert("Please position your face in the frame and try again");
      }
    }
  };

  if (!hasPermission) {
    // Camera permissions are still loading
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#162D4C" />
      </View>
    );
  }

  if (device == null) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>No camera device found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <View
          style={{
            flex: 1,
            position: "relative",
          }}
        >
          <Image
            source={{ uri: photo }}
            style={{
              flex: 1,
              borderRadius: 10,
            }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, position: "relative", borderRadius: 10 }}>
          <Camera
            ref={cameraRef}
            frameProcessor={frameProcessor}
            style={styles.camera}
            device={device}
            isActive={!!device}
            pixelFormat="yuv"
          />

          <View style={styles.bottomBar}>
            <TouchableOpacity
              onPress={handleTakePicture}
              style={styles.shutterButton}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    padding: 7,
    position: "relative",
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 24,
    position: "absolute",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  bottomBar: {
    justifyContent: "center",
    position: "absolute",
    bottom: 32,
    width: "100%",
    alignItems: "center",
  },
  shutterButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});

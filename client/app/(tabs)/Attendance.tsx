import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import axios from "axios";

export default function AttendanceScreen() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      if (!permission?.granted) {
        await requestPermission();
      }
      const locationStatus = await Location.requestForegroundPermissionsAsync();
      if (locationStatus.status !== "granted") {
        Alert.alert("Location permission not granted");
      }
    })();
  }, []);

  const handleMarkAttendance = async () => {
    if (!permission?.granted || !location) {
      Alert.alert("Camera or Location not ready");
      return;
    }

    // Capture photo logic would go here
    // Example: const photo = await CameraView.takePictureAsync();

    try {
      const photo = await cameraRef.current?.takePictureAsync();
      const currentLocation = await Location.getCurrentPositionAsync({});

      const formData = new FormData();
      formData.append("employeeId", "00001");
      formData.append("lat", currentLocation.coords.latitude.toString());
      formData.append("lon", currentLocation.coords.longitude.toString());
      formData.append("image", {
        uri: photo?.uri,
        type: "image/jpeg",
        name: "attendance.jpg",
      } as any);

      await axios.post(
        "https://dailycheck.vercel.app/api/attendance",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Alert.alert("Success", "Attendance marked successfully!");
      setAttendanceMarked(true);
    } catch (error: any) {
      console.error(error.message);
      Alert.alert("Error", "Failed to mark attendance");
    }
  };

  const handleGetLocation = async () => {
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Button title="Get Location" onPress={handleGetLocation} />
      <Button
        title={attendanceMarked ? "Attendance Marked" : "Mark Attendance"}
        onPress={handleMarkAttendance}
        disabled={attendanceMarked}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
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
});

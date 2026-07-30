import { View, StyleSheet } from "react-native";
import axios from "axios";
import LocationDetection from "./LocationDetection";
import FaceDetection from "./FaceDetection";

export default function CheckInScreen() {
  const handleCheckIn = async () => {
    try {
      // const res = await axios.post("http://your-backend-url/check-in", {
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // });

      alert("Check-in successful");
    } catch (err) {
      alert("Check-in failed");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LocationDetection />
      <FaceDetection />
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
  },
});

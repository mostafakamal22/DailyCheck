import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Button } from "react-native";

export default function LocationDetection() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleLocation = async () => {
    if (!location) {
      alert("Location not available");
      return;
    }

    setLoading(true);
  };

  return (
    <Button
      title="Check In Location"
      onPress={handleLocation}
      disabled={loading}
    />
  );
}

import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Simple login validation (for now, just a placeholder)
    if (employeeID === "00001" && password === "password123") {
      router.replace("/(tabs)Attendance");
    } else {
      alert("Invalid ID or Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DailyCheck Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        value={employeeID}
        onChangeText={setEmployeeID}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#e0f7fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#00796b",
  },
  input: {
    height: 50,
    borderColor: "#00796b",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

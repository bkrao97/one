import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const codedUsername = "User123";
    const codedPassword = "pass123";

    const navigation = useNavigation();

    if (username === codedUsername && password === codedPassword) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    if (isAuthenticated) {
      navigation.navigate("Home");
    } else {
      <Text style={styles.errorText}>Invalid credentials.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {isAuthenticated && (
        <Text style={styles.successText}>Login successful!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  successText: {
    color: "green",
    marginTop: 16,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});

export default Login;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const isActive = true;

  // Compose style
  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null,
  );

  return (
    <View style={styles.container}>
      {/* <View style={[styles.button, isActive && styles.activeButton]}> */}
      {/* @ts-ignore */}
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Composed Style</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  activeButton: {
    backgroundColor: "#6C63FF",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

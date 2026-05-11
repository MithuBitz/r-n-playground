import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark"  />
      <View style={styles.card}>
        <Text style={styles.title}>HomeScreen</Text>
        <Text style={styles.subtitle}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
});

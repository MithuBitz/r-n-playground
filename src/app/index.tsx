import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Custom Components
function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleed under nothch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </View>
  );
}

function SafeScreen() {
  return (
    <SafeAreaView
      edges={["bottom", "top"]}
      style={{ flex: 1, backgroundColor: "#1c1c1e" }}
    >
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (Safely below notch ✅)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content respacts the safe area on all devices.
      </Text>
    </SafeAreaView>
  );
}

const HomeScreen = () => {
  return (
    <>
      <SafeScreen />
      {/* <UnsafeScreen /> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

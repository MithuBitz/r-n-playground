import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const inset = useSafeAreaInsets();

  // console.log(inset);
  // console.log(initialWindowMetrics);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>
    </View>

    // <SafeAreaProvider initialMetrics={initialWindowMetrics}></SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({});

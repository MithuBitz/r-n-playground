import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, Button, Switch } from "react-native";

const HomeScreen = () => {
  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Text
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          {item}
        </Text>
      ))}
      <Button
        title="Hello i am a button"
        color="red"
        onPress={() => alert("Hello world")}
      />

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "#6c63ff" }}
        thumbColor={"violet"}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

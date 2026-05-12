import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
  light: {
    background: "#fff",
    card: "#f5f5f5",
    text: "#1a1a1a",
    subtext: "#666666",
    accent: "#6c63ff",
  },
  dark: {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    subtext: "#AAAAAA",
    accent: "#9d97ff",
  },
};

const HomeScreen = () => {
  const systemColorScheme = useColorScheme();
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark =
    manualDark !== null ? manualDark : systemColorScheme === "dark";

  const theme = isDark ? themes.dark : themes.light;

  // console.log(systemColorScheme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      {/* Header */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          System preference: {systemColorScheme ?? "unknown"}
        </Text>
      </View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemColorScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});

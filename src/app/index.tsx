import { StyleSheet, FlatList, Text, View } from "react-native";

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
  return (
    <FlatList
      style={{
        backgroundColor: "#cfcfcf"
      }}
      data={USERS}
      // horizontal
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, backgroundColor: "#d536e4" }}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

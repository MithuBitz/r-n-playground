import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const HomeScreen = () => {
  const [name, setName] = React.useState("");
  return (
    <View>
      <Text numberOfLines={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt
        adipisci quis recusandae explicabo voluptas tenetur nulla, facilis
        facere modi?
      </Text>

      {/* From Expternal source */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/3923064/pexels-photo-3923064.jpeg",
        }}
        width={200}
        height={200}
      />

      {/* From local source */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 200, height: 200 }}
        blurRadius={30}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"red"}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          marginTop: 10,
          fontSize: 20,
        }}
      />

      <Pressable
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6c63ff",
        })}
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 20,
          right: 20,
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Pressing...</Text> : <Text>Press Me</Text>
        }
      </Pressable>
    </View>
  );
};

export default HomeScreen;

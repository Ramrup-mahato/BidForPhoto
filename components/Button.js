import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export const CircleButton = ({ handlePress, Icon, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        ...props,
      }}
      onPress={handlePress}
    >
      <AntDesign name="heart" size={24} color="red" />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#000",

        borderRadius: 50,
        minWidth: minWidth,
        padding:10,
        elevation:5,
        ...props,
      }}
      onPress={handlePress}
    >
      {/* <AntDesign name="heart" size={24} color="red" /> */}
      <Text style={{
        fontSize:fontSize,
        fontWeight:700,
        color:"#fff",
        textAlign:'center',
      }}>Place a bit</Text>
    </TouchableOpacity>
  );
};

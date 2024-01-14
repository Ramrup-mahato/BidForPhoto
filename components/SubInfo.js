import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { PeopleImg } from "../container/dummy";
import { Entypo } from "@expo/vector-icons";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "700",
          fontSize: titleSize,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: subTitleSize,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Entypo name="select-arrows" size={20} color="black" />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 800,
        }}
      >
       Rs. {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={{ uri: imgUrl }}
      resizeMode="cover"
      style={{
        width: 48,
        height: 48,
        borderRadius: 50,
        borderColor: "#ffe",
        borderWidth: 2,
        marginLeft: index === 0 ? 0 : -10,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={style.people}>
      {PeopleImg.map((imgUrl, i) => (
        <ImageCmp imgUrl={imgUrl} index={i} key={`People-${i}`} />
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        maxWidth: "50%",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 12,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontWeight: 900,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={style.SubInfo}>
      <People />
      <EndDate />
    </View>
  );
};
const style = StyleSheet.create({
  SubInfo: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
  },
  people: {
    flexDirection: "row",
  },
});

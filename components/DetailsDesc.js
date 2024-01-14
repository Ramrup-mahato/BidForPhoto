import { View, Text } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [moreText, setMoreText] = useState(false);
  const handleReadMore = () => {
    if (moreText == true) {
      setText(data.description.slice(0, 100));
      setMoreText(false);
    } else {
      setText(data.description);
      setMoreText(true);
    }
  };
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={20}
          subTitleSize={14}
        />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: 30,
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          Description
        </Text>
        <View
          style={{
            // opacity: 0.5,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#706e6e" }}>
            {text}
            {!moreText && "..."}
            <Text
              style={{ fontSize: 16, fontWeight: 800 }}
              onPress={() => handleReadMore()}
            >
              {moreText == true ? " Less" : "more"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;

import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  // console.log(bid);
  return (
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:5,
      paddingHorizontal:10

    }}>
      <Image
        source={{ uri: bid.image }}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          borderRadius: 50,
          borderColor: "#fff",
          borderWidth: 2,
        }}
      />
      <View>
        <Text style={{}}>Bid place by {bid.name}</Text>
        <Text
          style={{
            fontSize: 11,
            color: "#706e6e",
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;

import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCart = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={style.MainView}>
      <View style={style.secCart}>
        <Image
          style={style.imageStyle}
          source={{
            uri: data.image,
          }}
          resizeMode="cover"
        />
        <CircleButton right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: 10 }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={20}
          subTitleSize={14}
        />
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={15}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  MainView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    margin: 5,
    shadowColor: "black",
  },
  secCart: {
    width: "100%",
    height: 250,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default NFTCart;

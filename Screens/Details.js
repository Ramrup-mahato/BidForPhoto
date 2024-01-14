import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components/index";
import { AntDesign } from "@expo/vector-icons";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        source={{ uri: data.image }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <AntDesign
        name="leftcircle"
        size={24}
        color="#fff"
        style={{
          position: "absolute",
          left: 15,
          top: 15,
        }}
        onPress={() => navigation.goBack()}
      />
      <CircleButton top={15} right={15} />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar barStye="dark-content" />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={20} />
      </View>
      <FlatList
        data={data.bits}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: 15,
              }}
            >
              <DetailsDesc data={data} />
              {data.bits.length > 0 && <Text style={{
                fontSize:16,
                fontWeight:700
              }}>Current Bids</Text>}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

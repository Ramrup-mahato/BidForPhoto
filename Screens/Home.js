import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { HomeHeader, NFTCart, FocusStatusBar } from "../components/index";
import NFTData from "../container/dummy";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filterData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filterData.length) {
      setNftData(filterData);
    } else {
      setNftData([]);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background="black" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCart data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: "#02213d" }} />
          <View style={{ flex: 1, backgroundColor: "aqua" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

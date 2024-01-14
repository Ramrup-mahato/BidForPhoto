import { View, Text, Image, TextInput } from "react-native";
import logo from "../assets/R_logo.png";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: "#02213d",
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 45,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={{
              uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
            }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 50,
            }}
          />
          <MaterialIcons
            name="verified"
            size={15}
            color="aqua"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text
          style={{
            fontSize: 11,
            color: "#fff",
          }}
        >
          Hello, Rahul 👋
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#fff",
            marginTop: 7,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <View
          style={{
            width: "100%",
            borderRadius: 1,
            backgroundColor: "gray",
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 5,
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <AntDesign name="search1" size={20} color="white" />
          <TextInput
            placeholder="Search Nft"
            style={{
              flex: 1,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

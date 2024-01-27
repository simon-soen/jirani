import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./home.style";
import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/headings";
import ProductRow from "../components/product/productRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, MAX_WIDTH } from "../constants";
import CategoriesTile from "../components/home/CategoriesTile";
import CartCount from "../components/cart/CartCount";

const Home = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };

  const renderItem = ({ item }) => {
    switch (item.key) {
      case "Welcome":
        return <Welcome />;
      case "Carousel":
        return <Carousel />;
      case "Headings":
        return <Headings />;
      case "ProductRow":
        return <ProductRow />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, maxWidth: MAX_WIDTH}}>
      <StatusBar barStyle="white-content" backgroundColor={COLORS.black} />

      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color={COLORS.gray2} />

          <Text style={styles.location}>
            {userData ? userData.location : "Nairobi Kenya"}
          </Text>

          <View style={{ alignItems: "flex-end", marginRight: 10 }}>
            <CartCount />
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={20} color={COLORS.gray2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
       

          <CategoriesTile />
          <Welcome />
        </View>
      </View>

      <FlatList
        data={[
          // { key: "Welcome" },
          { key: "Carousel" },
          { key: "Headings" },
          { key: "ProductRow" },
        ]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        style={{marginBottom:50}}

      />
    </SafeAreaView>
  );
};

export default Home;
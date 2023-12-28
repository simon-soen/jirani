import { ScrollView, Text, TouchableOpacity, View, FlatList, Dimensions } from "react-native";
import React from "react";
import {SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto,  MaterialCommunityIcons} from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/headings";
import ProductRow from "../components/product/productRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { COLORS, SIZES } from "../constants";
import CategoriesTile from "../components/home/CategoriesTile";
 


const Home = ({navigation}) => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)


  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`;

    try{
      const currentUser = await AsyncStorage.getItem(userId);
      
      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch{
      console.log('Error retrieving data:', error)
    }

  };

  return ( 
    <SafeAreaView style={{height:SIZES.height - 75}}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color={COLORS.gray2}/>

          <Text style={styles.location}>{userData ? userData.location :"Nairobi Kenya"}</Text>
          
          <View style={{alignItems:"flex-end", marginRight:10}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber} >8</Text>
            </View>

              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Fontisto name="shopping-bag" size={20} color={COLORS.gray2}/>
              </TouchableOpacity>
          </View>
          
        </View>

        <CategoriesTile/>
  

      
      </View> 
      <ScrollView>
        <Welcome />
        <Carousel/>
        <Headings/> 
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}
   
export default Home;  

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/headings";
import ProductRow from "../components/product/productRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
 


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
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}/>

          <Text style={styles.location}>{userData ? userData.location :"Nairobi Kenya"}</Text>
          
          <View style={{alignItems:"flex-end", marginRight:10}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber} >8</Text>
            </View>


            
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Fontisto name="shopping-bag" size={24} />
              </TouchableOpacity>
          </View>

        </View>
      </View> 
     <ScrollView>
        <View style={styles.container}>
          <Welcome user={userData ? userData.name : "Guest"} />
          <Carousel />
          <Headings title="Categories" />
          <ProductRow />
          <Headings title="Top Selling" />
          <ProductRow />
          <Headings title="Best Deals" />
          <ProductRow />
        </View>
      
    </ScrollView>
    </SafeAreaView>
  )
}
   
export default Home;  


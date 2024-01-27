import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";


const CartCount = () => {   
    const [userId, setUserId] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const getUserId = async () => {
            try {
                const userId = await AsyncStorage.getItem('id');
                setUserId(userId);
                console.log('User ID:', userId);
                await getCartCount(userId);
            } catch (error) {
                console.log('Error retrieving user ID:', error);
            }
        };
    
        getUserId();
    }, []);


    const getCartCount = async (userId) => {
        try {
          if (!userId) {
            return 0;
          }
          const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/cart/count/${userId.replace(/"/g, '')}`);
          const data = await response.json();
    
          console.log('Fetched cart count:', data);
    
          if (response.ok) {
            const cartCount = data;
            setCartCount(cartCount);
          } else {
            console.log('Error fetching cart count:', countData.error);
            return 0;
          }
        } catch (error) {
          console.log('Error retrieving cart count:', error);
          return 0;
        }
      };

      
    
        return (
            <View style={styles.countContainer}>
                <Text style={styles.cartNumber}>{cartCount}</Text>
            </View>
        );


};
   
export default CartCount;


const styles = StyleSheet.create({
    countContainer: {
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignContent:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999,
    },
    cartNumber: {
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:10,
        color: "white",
        alignSelf:"center",
    },
});
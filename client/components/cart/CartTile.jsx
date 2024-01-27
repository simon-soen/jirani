import { ActivityIndicator, FlatList, Text, View, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import styles from "../product/searchTile.style";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {Ionicons} from '@expo/vector-icons';
import { fetchSupplierUsername } from "../auth/Username";



const CartTile = () => {
    const [userId, setUserId] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [supplierUsernames, setSupplierUsernames] = useState({});

   useEffect(() => {
    const fetchSupplierUsernames = async () => {
        try {
            const usernames = {};
            if (cartItems.products) {
                for (const product of cartItems.products) {
                    if (product.cartItem) {
                        const supplierId = product.cartItem.supplier;
                        const username = await fetchSupplierUsername(product.cartItem);
                        usernames[supplierId] = username;
                    }
                }
                setSupplierUsernames(usernames);
            }
        } catch (error) {
            console.error('Error fetching supplier usernames:', error);
            // Handle the error
        }
    };

    fetchSupplierUsernames();
}, [cartItems]);



    useEffect(() => {
        const getUserId = async () => {
            try {
                const userId = await AsyncStorage.getItem('id');
                setUserId(userId);
                console.log('User ID:', userId);
                 await (getCartItems(userId), deleteCartItem(userId));
            } catch (error) {
                console.log('Error retrieving user ID:', error);
            }
        };
    
        getUserId();
    }, []);
    
    const getCartItems = async (userId) => {
        try {
            if (!userId) {
                return;
            }
            const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/cart/find/${userId.replace(/"/g, '')}`);
            const data = await response.json();
    
            console.log('Fetched data:', data);
    
            if (response.ok) {
                // Handle the case when the response is successful
                const cartItems = data;
                setCartItems(cartItems);
            } else {
                console.log('Server returned an error:', data.error);
                setCartItems([]); 
            }
        } catch (error) {
            console.log('Error retrieving cart items:', error);
        } finally {
            setLoading(false);
        }
    };

    
      const deleteCartItem = async (cartItemId) => {
        if (!userId) {
          return;
        }
      
        try {
          const response = await axios.delete(`https://jirani-bebe9d207799.herokuapp.com/api/cart/${userId.replace(/"/g, '')}/${cartItemId}`);
      
          // Log the entire response for debugging
          console.log('Delete Response:', response);
      
          if (response.status === 200) {
            alert('Cart item deleted successfully');
            // Fetch updated cart items after successful deletion
            await getCartItems(userId);
          } else {
            console.log('Server returned an error:', response.data.error);
            alert('Error deleting cart item');
          }
        } catch (error) {
          console.error('AxiosError:', error);
          alert('Network Error: Unable to reach the server');
        }
      };

    
    const navigation = useNavigation();
    
    return (
        <View style={{
                marginVertical:SIZES.xxLarge*1.4, 
                marginHorizontal:SIZES.small,
                
            }}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            ) : (
              
                <FlatList
                    data={cartItems.products}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.container} onPress={() =>navigation.navigate('ProductDetails', {item})}>
                        <View style={styles.image}>
                            {item.cartItem && 
                                <Image source={{
                                    uri: `/${item.cartItem.imageUrl}`,
                                    }} 
                                    style={styles.productImg} 
                                />
                            }
                        </View>
                        <View style={styles.textContainer}>
                            {item.cartItem && <Text style={styles.productTitle}>{item.cartItem.title}</Text>}
                            {item.cartItem && <Text style={styles.supplier}>{supplierUsernames[item.cartItem.supplier]}</Text>}
                            {item.cartItem && <Text style={[styles.supplier, {fontFamily:"semibold"}]}>Kshs {item.cartItem.price}</Text>}
                        </View>
                        <View>                            
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => deleteCartItem(item.cartItem._id)} style={{flexDirection:"row"}}>
                                <Ionicons name="trash" size={24} color="red" />

                            </TouchableOpacity>
                        </View>
                        
                    </TouchableOpacity>
                    )}
                />
            )}
             
        </View>
    );
};

export default CartTile;


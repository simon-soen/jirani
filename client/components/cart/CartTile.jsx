import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import styles from "../product/searchTile.style";
import { useNavigation } from "@react-navigation/native";
import { SERVER_URL } from 'react-native-dotenv';

const CartTile = () => {
    const [userId, setUserId] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserId = async () => {
            try {
                const userId = await AsyncStorage.getItem('id');
                setUserId(userId);
                console.log('User ID:', userId);
                await getCartItems(userId);
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
            const response = await fetch(`${SERVER_URL}/api/cart/find/${userId.replace(/"/g, '')}`);
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
    
    


    const navigation = useNavigation();
    
    return (
        <View style={{marginTop:SIZES.xxLarge*2}}>
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
                            {item.cartItem && <Image source={{ uri: item.cartItem.imageUrl }} style={styles.productImg} />}
                        </View>
                        <View style={styles.textContainer}>
                            {item.cartItem && <Text style={styles.productTitle}>{item.cartItem.title}</Text>}
                            {item.cartItem && <Text style={styles.supplier}>{item.cartItem.supplier}</Text>}
                            {item.cartItem && <Text style={styles.supplier}>{item.cartItem.price}</Text>}
                        </View>
                        <View>                            
                            <Text style={styles.supplier}>{item.quantity}</Text>
                        </View>
                    </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

export default CartTile;


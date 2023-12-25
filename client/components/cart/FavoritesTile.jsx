import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import styles from "../product/searchTile.style";
import { useNavigation } from "@react-navigation/native";

const FavoriteTile = () => {
    const [userId, setUserId] = useState(null);
    const [favItems, setfavItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserId= async () => {
            try{
                const userId = await AsyncStorage.getItem('id');
                setUserId(userId);
                getfavItems(userId);
                console.log('User ID:', userId);
                await getfavItems(userId);
            } catch{
                console.log('Error retrieving user ID:', error);
            }
        };


        getUserId();
    }, []);
   
    const getfavItems = async (userId) => {
        try {
            if (!userId) {
                return;
            }
            const response = await fetch(`http://192.168.0.109:3000/api/favourite/find/${userId.replace(/"/g, '')}`);
            const data = await response.json();
            
            console.log('Fetched data:', data);

            if (response.ok) {
                const favItems = data;
                setfavItems(favItems);
            } else {
                console.log('Server returned an error:', data.error);
                setfavItems([]); 
            }
        } catch (error) {
            console.log('Error retrieving Favourite items:', error);
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
                    data={favItems.products}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {item})}>
                            <View style={styles.image}>
                                {item.favItem && <Image source={{ uri: item.favItem.imageUrl }} style={styles.productImg} />}
                            </View>
                            <View style={styles.textContainer}>
                                {item.favItem && <Text style={styles.productTitle}>{item.favItem.title}</Text>}
                                {item.favItem && <Text style={styles.supplier}>{item.favItem.supplier}</Text>}
                                {item.favItem && <Text style={styles.supplier}>{item.favItem.price}</Text>}
                            </View>
                        </TouchableOpacity>
                        
                    )}
                />
            )}
        </View>
    );
};


export default FavoriteTile;


 
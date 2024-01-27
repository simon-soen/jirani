import { ActivityIndicator, FlatList, Dimensions, View, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { SIZES, COLORS } from "../../constants";



const windowWidth = Dimensions.get('window').width;
const itemWidth = 300; // Adjust this based on your design

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};





const MyProducts = () => {
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const getUserId= async () => {
            try{
                const userId = await AsyncStorage.getItem('id');
                setUserId(userId);
                getProduct(userId);
                console.log('User ID:', userId);
               await getProduct(userId);
            } catch{
                console.log('Error retrieving user ID:', error);
            }
        };
    
    
        getUserId();
    }, []);
      





    const getProduct = async (userId) => {
        try {
            if (!userId) {
                return;
            }
            const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/products/${userId.replace(/"/g, '')}`);
            const data = await response.json();
            
            console.log('Fetched data:', data);

            if (response.ok) {
                const myProducts = data;
                setMyProducts(myProducts);
            } else {
                console.log('Server returned an error:', data.error);
                setMyProducts([]); 
            }
        } catch (error) {
            console.log('Error retrieving Favourite items:', error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <View style={styles.container}>
            {loading ? (
                <View style={{marginVertical:SIZES.large}}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            ) : (
            <FlatList
              data={myProducts}
              keyExtractor={(item) => item._id.toString()}
              numColumns={calculateNumColumns()}
              renderItem={({ item }) => <ProductCard item={item} />}
              contentContainerStyle={styles.contentContainer} 
              ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            )}
        </View>
    )
}

export default MyProducts;

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
    },

    container:{
        paddingTop:SIZES.xxLarge + 20,
        width:SIZES.width-20,
        alignSelf:"center",
    },


});
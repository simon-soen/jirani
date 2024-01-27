import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import styles from "../product/searchTile.style";
import { useNavigation } from "@react-navigation/native";
import { fetchSupplierUsername } from "../auth/Username";


const OrderTile = () => {
  const [userId, setUserId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [supplierUsernames, setSupplierUsernames] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usernames = {};
    
        if (orders.length > 0) {
          const usernamePromises = orders.map(async (order) => {
            const supplierId = order.productId ? order.productId.supplier : order.supplier;
            if (supplierId) {
              const username = await fetchSupplierUsername({ supplier: supplierId });
              usernames[order._id] = username;
            }
          });
    
          await Promise.all(usernamePromises);
    
          setSupplierUsernames(usernames);
        }
      } catch (error) {
        console.error('Error fetching supplier usernames:', error);
      }
    };
    
    

    fetchData();
  }, [orders]);


  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
        setUserId(userId);
        await getUserOrders(userId);
      } catch (error) {
        console.log('Error retrieving user ID:', error);
      }
    };

    getUserId();
  }, []);

  const getUserOrders = async (userId) => {
    try {
      if (!userId) {
        return;
      }
      const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/orders/user/${userId.replace(/"/g, '')}`);
      const data = await response.json();

      console.log('Fetched data:', data);

      if (response.ok) {
        const userOrders = data;
        setOrders(userOrders);
      } else {
        console.log('Server returned an error:', data.error);
        setOrders([]);
      }
    } catch (error) {
      console.log('Error retrieving cart items:', error);
     }
      finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={{
      marginVertical: SIZES.xxLarge * 1.4,
      marginHorizontal: SIZES.small,
    }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', { item })}>
              <View style={styles.image}>
                <Image source={{
                  uri: `/${item.productId ? item.productId.imageUrl : item.imageUrl}`,
                }}
                  style={styles.productImg}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.productId ? item.productId.title : item.title}</Text>
                <Text style={styles.supplier}>{supplierUsernames[item._id]}</Text>
                <Text style={[styles.supplier, { fontFamily: "semibold" }]}>Kshs {item.productId ? item.productId.price : item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default OrderTile;
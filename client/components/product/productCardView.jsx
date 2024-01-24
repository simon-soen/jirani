import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./productCardview.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { fetchSupplierUsername } from "../auth/Username";
import { addToCart } from "../cart/CartUtils";

const ProductCardView = ({ item }) => {
  const [supplierUsername, setSupplierUsername] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = await fetchSupplierUsername(item);
        setSupplierUsername(username);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [item]);

  const handleAddToCart = async () => {
    const cartItem = item._id;
    await addToCart(cartItem);
  };




  const navigation = useNavigation();

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${item.imageUrl}`,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {supplierUsername}
          </Text>
          <Text style={styles.price}>Ksh{item.price}</Text>
        </View>

        <TouchableOpacity onPress={()=>handleAddToCart()}  style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
// CategoryList.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import axios from "axios";
import styles from "../product/productList.style";
import ProductCardView from "../product/productCardView";




const windowWidth = Dimensions.get('window').width;
const itemWidth = 150; // Adjust this based on your design

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};

const CategoryList = ({ category }) => {
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://jirani-bebe9d207799.herokuapp.com/api/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category]);

  useEffect(() => {
    // console.log('Products this:', products);
  }, [products]);

  return (
    <View style={styles.container}>
       <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        numColumns={calculateNumColumns()}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.contentContainer} 
        ItemSeparatorComponent={() => <View style={styles.separator} />}
    
      />
    </View>
  );
};

export default CategoryList;
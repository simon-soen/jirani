import { ActivityIndicator, FlatList, Dimensions, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import ProductCardView from "./productCardView";


const windowWidth = Dimensions.get('window').width;
const itemWidth = 150; // Adjust this based on your design

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};


const ProductList = () => {
  const SERVER_URL = process.env.SERVER_URL
  // Fetch 5 products
  // Example usage: Fetch 5 products initially
  const { data, isLoading, error, refetch } = useFetch(5);

  // Later, if you want to fetch 10 products
  refetch(10);

  console.log("Data:", data);
  console.error("Error:", error);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        numColumns={calculateNumColumns()}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default ProductList;
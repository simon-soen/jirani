import { FlatList, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import ProductCardView from "./productCardView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const SERVER_URL = "https://jirani-bebe9d207799.herokuapp.com";
  const { data, isLoading, error } = useFetch(`${SERVER_URL}/api/products`);
  
  console.log("Data:", data);
  console.log("isLoading:", isLoading);
  return (
    <View style={styles.container}>
      {isLoading ? ( // Corrected variable name
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;

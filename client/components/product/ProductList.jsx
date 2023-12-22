import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import ProductCardView from "./productCardView";

const ProductList = () => {
  const SERVER_URL = process.env.SERVER_URL;
  const { data, isLoading, error } = useFetch(`${SERVER_URL}/api/products`);
  console.log("Data:", data);
    console.error("Error:", error);



    if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
          </View>
        );
      }

    return(
        <View style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={(item) => item._id.toString()}
              numColumns={2}
              renderItem={({ item }) => <ProductCardView item={item} />}
              contentContainerStyle={styles.contentContainer} 
              ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
        </View>
    )
}

export default ProductList;
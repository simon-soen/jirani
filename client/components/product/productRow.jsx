import { FlatList, Text, View, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import ProductCardView from "./productCardView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";




const windowWidth = Dimensions.get('window').width;
const itemWidth = 182 ; 
const SERVER_URL = process.env.SERVER_URL

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};


const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  
  // console.log("Data:", data);
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
          numColumns={calculateNumColumns()}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;

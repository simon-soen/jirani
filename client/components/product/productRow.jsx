import { FlatList, Text, View, ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import ProductCardView from "./productCardView";
// import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";





const windowWidth = Dimensions.get('window').width;
const itemWidth = 200; 

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};


const ProductRow = () => {
  const { data, isLoading, error } = useFetch('https://jirani-bebe9d207799.herokuapp.com/api/products');
  
  console.log("Data:", data);
  console.log("isLoading:", isLoading);
  return (
    <View style={styles.container}>
      {isLoading ? ( 
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

const styles = StyleSheet.create({
  container:{
    
      marginTop: SIZES.medium,
      // marginLeft:12,
      marginHorizontal: SIZES.medium,
      marginBottom: SIZES.medium,
  }
});
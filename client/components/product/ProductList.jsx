import { ActivityIndicator, FlatList, Dimensions, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import ProductCardView from "./productCardView";



const windowWidth = Dimensions.get('window').width;
const itemWidth = 200;

const calculateNumColumns = () => {
  const numColumns = Math.floor(windowWidth / itemWidth);
  return numColumns > 0 ? numColumns : 1;
};

const ProductList = () => {
  const { data, isLoading, error } = useFetch('https://jirani-bebe9d207799.herokuapp.com/api/products');
  console.log("Data:", data);
  console.log("isLoading:", isLoading);


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
              numColumns={calculateNumColumns()}
              renderItem={({ item }) => <ProductCardView item={item} />}
              contentContainerStyle={styles.contentContainer}   
            />
        </View>
    )
}

export default ProductList;
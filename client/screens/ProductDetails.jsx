import { TouchableOpacity,View, Text, Image} from "react-native";
import React, {useState}from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./productDetails.styles";
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from "@expo/vector-icons";
import { addToCart } from "../components/cart/CartUtils";
import { addToFav } from "../components/cart/FavUtils";
import { Alert } from "react-native";

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  const [count, setCount] = useState(1)


 

  const increment = () => {
    setCount(count + 1)
  }


  const decrement = () => {
    
    if(count > 1){
      setCount(count - 1)
    }
  }
  const handleAddToCart = async () => {
    const cartItem = item._id;
    const quantity = count;
    await addToCart(cartItem, quantity);
  };


  const handleAddToFavorites = async () => {
    try {
      const favItem = item._id;
      const response = await addToFav(favItem);
  
      if (response && response.ok) {
        const data = response.data;
       
        if (data === "Product added to favorite") {
          console.log('Product added to favorite. Showing alert.');
          Alert.alert('Success!', 'Product added to favorites.');
          // Handle this case in the UI (e.g., update the UI)
       } else if (data === "Item already exists in favorite") {
          console.log('Item already exists in favorite. Showing alert.');
          Alert.alert('Oops!', 'Item already exists in favorites.');
          // Handle this case in the UI (e.g., show an alert)
       } else {
          console.log('Unexpected response. Showing alert.');
          Alert.alert('Unexpected Response', 'An unexpected response was received from the server.');
          // Handle other unexpected responses
       }
    } else {
       console.log('Server returned an error with status:', response.status);
       Alert.alert('Error', 'There was an error adding the product to favorites.');
       // Handle other error cases in the UI
    }
 
    
      } catch (error) {
        // console.error('Error adding product to favorite:', error);
        // Alert.alert('Error', 'There was an error adding the product to favorites.');
        // Handle other types of errors in the UI
      }
  };
  

  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size={30}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleAddToFavorites()}>
                <Ionicons style={styles.heart}name='heart' size={30}/> 
            </TouchableOpacity>
        </View>
        <Image
            source={{
                uri: item.imageUrl
            }}
            style={styles.image}
        />
        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceWrapper}>
                <Text style={styles.price}>ksh{item.price}</Text>
                </View>
            </View>
            <View style={styles.ratingRow}>  
                <View style={styles.rating}>
                    {[1,2,3,4,5].map((index) => (
                        <Ionicons
                            key={index} 
                            name='star' 
                            size={24} 
                            color="gold"/>
                    ))}
                     <Text style={styles.ratingText}> (4.9) </Text>

                </View>

                <View style={styles.rating}>
                    <TouchableOpacity onPress={() =>increment()}>
                        <SimpleLineIcons 
                        name='plus' 
                        size={20 }/>
                    </TouchableOpacity>

                    <Text style={styles.ratingText}> {count} </Text>

                    <TouchableOpacity onPress={() =>decrement( )}>
                        <SimpleLineIcons 
                        name='minus' 
                        size={20 }/>
                    </TouchableOpacity>
                </View>
             </View> 

             <View style={styles.descriptionWrapper}>
                <Text style={styles.description}> Description</Text>
                <Text style={styles.descriptionText}>
                    {item.description}
                </Text>
            </View> 

            <View style={styles.locationWrapper}>
                <View style={styles.Location}>
                    <View style={styles.locationWrap}>
                        <Ionicons name='location-outline' size={20}/>
                        <Text>{item.pronduct_location}</Text> 
                    </View>

                    <View style={styles.locationWrap}>
                        <MaterialCommunityIcons name='truck-delivery' size={20}/>
                        <Text>Free Delivery</Text> 
                    </View>  
                </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>handleAddToCart()} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleAddToCart()} style={styles.addCart}>
                    <Fontisto style={styles.fonti}  name='shopping-bag' size={22}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProductDetails;
import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import styles from "./productCard.styles";
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";



const ProductCard = ({item, userId}) => {
    console.log('Item:', item);
    const navigation = useNavigation();
    return (     
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
        <View style= {styles.container} >
            <View style={styles.imageCont}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                        uri: item.imageUrl,
                        }}
                        style={styles.image} 
                        />
                        
                </View> 
          
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={styles.price}> Ksh{item.price} </Text>
                    <Text style={styles.info}> Orders: 44</Text>
                    <Text style={styles.info}> Status: Sold</Text>

                    <View style={styles.ratingRow}>  
                        <View style={styles.rating}>
                            {[1,2,3,4,5].map((index) => (
                                <Ionicons
                                    key={index} 
                                    name='star' 
                                    size={19} 
                                    color="gold"/>
                            ))}
                            <Text style={styles.ratingText}> (4.9) </Text>
                        </View>
                    </View> 

    
                </View> 
            </View>
            <TouchableOpacity style={styles.deleteBtn}> 
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
             </TouchableOpacity>     
        </View>
      </TouchableOpacity>

    )
}

export default ProductCard; 
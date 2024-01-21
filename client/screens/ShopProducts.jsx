import { Text, View, TouchableOpacity, } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewRivals.style';
import {Ionicons} from '@expo/vector-icons';
import { COLORS, SIZES} from '../constants';
import MyProducts from '../components/shop/MyProducts';


const ShopProducts = ({navigation}) => {
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
               
                <Text style={{
                    fontFamily:"semibold",
                    fontSize:SIZES.medium,
                    color:COLORS.gray2, 
                    marginHorizontal:SIZES.width*0.39 
                    }}>My Products</Text>
            </View>
            <MyProducts/>
            <TouchableOpacity
                style={{bottom: 20, right: 20, position: "absolute", zIndex:999}}

                    onPress={() => navigation.navigate("AddProduct")}
            >
                <Ionicons name="add-circle" size={60} color={COLORS.primary} />
            </TouchableOpacity>
        </View> 
        <TouchableOpacity>
      </TouchableOpacity>
     </SafeAreaView>

    );
}


export default ShopProducts;

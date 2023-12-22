import { Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../constants';
import CartTile from '../components/cart/CartTile';
import styles from './NewRivals.style';

const Orders = ({navigation}) => {
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' 
                    size={30} color={COLORS.lightWhite}/> 
                </TouchableOpacity>

                <Text style={styles.heading }>Cart</Text>
            </View>
            <CartTile/>
        </View> 
     </SafeAreaView>

    );
}

export default Orders;


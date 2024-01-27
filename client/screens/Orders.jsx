import { Text, View, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../constants';
import OrderTile from '../components/order/OrderTile';
import styles from './NewRivals.style';

const Orders = ({navigation}) => {
    return (
     <SafeAreaView style={[styles.container]}>
              <StatusBar barStyle="white-content" backgroundColor={COLORS.black} />
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' 
                    size={30} color={COLORS.lightWhite}/> 
                </TouchableOpacity>

                <Text style={styles.heading }>Orders</Text>
            </View>
            <OrderTile/>
        </View> 
     </SafeAreaView>

    );
}

export default Orders;

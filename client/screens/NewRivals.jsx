import { Text, View, TouchableOpacity,StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewRivals.style';
import {Ionicons} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import ProductList from '../components/product/ProductList';

const NewRivals = ({navigation}) => {
    return (
     <SafeAreaView style={[styles.container]}>
              <StatusBar barStyle="white-content" backgroundColor={COLORS.black} />

            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' 
                        size={30} 
                        color={COLORS.lightWhite} 
                        marginLeft={SIZES.small}
                    /> 
                </TouchableOpacity>

                <Text style={styles.heading }>Products</Text>
            </View>
        <ProductList/>
     </SafeAreaView>

    );
}

export default NewRivals;

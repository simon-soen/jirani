import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './searchTile.style';
import {useNavigation} from '@react-navigation/native';
import { fetchSupplierUsername } from "../auth/Username";   
import { useState, useEffect } from "react";

const SearchTile = ({item}) => {
    const navigation = useNavigation();
    const [supplierUsername, setSupplierUsername] = useState(null);

    
    

    useEffect(() => {
        const fetchData = async () => {
          const username = await fetchSupplierUsername(item);
          setSupplierUsername(username);
        };
    
        fetchData();
      }, [item]);
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {item})}>
                <View style={styles.image}>
                    <Image source={{uri: item.imageUrl}} style={styles.productImg} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.supplier}>{supplierUsername}</Text>
                    <Text style={styles.supplier}>Ksh {item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTile
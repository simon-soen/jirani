import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants"; 
import {Feather, Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";       
import  {categories}  from '../home/categories';
import { useState } from "react";

const Welcome = () =>   {
const navigation = useNavigation();


    return (
    <View>
        <View style={styles.container}>
            {/* <Text style={styles.welcomeTxt (COLORS.black, SIZES.xSmall)}>BUY & SELL</Text>
            <Text style={styles.welcomeTxt (COLORS.primary, )}></Text> */}
            
            <View style={styles.searchContainer}>
                <TouchableOpacity>  
                    <Feather name="search" size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                    style={styles.searchInput}
                    value=""
                    onPressIn={() =>navigation.navigate ("Search")}
                    placeholder="What are you looking for?"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Welcome;
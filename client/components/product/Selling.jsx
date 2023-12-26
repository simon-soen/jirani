import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./selling.style";
import { COLORS, SIZES } from "../../constants"; 
import {Feather, Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";       


const Selling = () =>   {
const navigation = useNavigation();

    return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt (COLORS.primary, )}>What are you Selling?</Text>
        </View>
        
    </View>
  )
}

export default Selling;
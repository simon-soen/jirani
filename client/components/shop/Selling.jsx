import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants"; 
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

const styles = StyleSheet.create({
    container: {
        width : "100%"
    },

    welcomeTxt: (color) => ({   
        fontSize:SIZES.xxLarge-11,
        fontFamily:"bold",
        color:color,
        marginHorizontal:SIZES.xLarge + 10,
        marginTop:SIZES.xSmall/2,
    })
});
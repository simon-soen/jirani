import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const ButtonSignup = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.btnStyle(isValid ===false? COLORS.gray: COLORS.darkblue)}
    >
        {loader === false ? (
            <Text style={styles.btnTxt}>{title}</Text>
        ):(
            <ActivityIndicator/>
        )}
    </TouchableOpacity>
  )
}

export default ButtonSignup

const styles = StyleSheet.create({
   
    btnStyle: (backgroundColor)=>({
        height:50,
        width:'90%',
        marginVertical:SIZES.xxLarge,
        marginHorizontal:'5%',
        backgroundColor:backgroundColor,
        justfyContent:'center',
        alignItems:'center',
        borderRadius:12
    }),

    btnTxt:{
        fontFamily:'bold',
        color:COLORS.words,
        fontSize:18,
        marginVertical:10
    },

})
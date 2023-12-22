import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.btnStyle(isValid ===false? COLORS.gray: COLORS.primary)}
    >
        {loader === false ? (
            <Text style={styles.btnTxt}>{title}</Text>
        ):(
            <ActivityIndicator/>
        )}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
   
    btnStyle: (backgroundColor)=>({
        height:50,
        width:'100%',
        marginVertical:20,
        backgroundColor:backgroundColor,
        justfyContent:'center',
        alignItems:'center',
        borderRadius:12
    }),

    btnTxt:{
        fontFamily:'bold',
        color:COLORS.white,
        fontSize:18,
        marginVertical:10
    },

})
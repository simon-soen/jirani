import { StyleSheet } from "react-native";
import {COLORS } from "react-native/Libraries/NewAppScreen";
import { SIZES } from "../constants";


const styles = StyleSheet.create({
    textStyle:{
        fontSize:40,
        fontFamily:"bold"
    },

    appBarWrapper :{
        marginTop:SIZES.small,
        marginhorizontal:22
    },

    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    location : {
        fontSize: SIZES.medium,
        fontFamily:"medium",
        color:'white'
    },

    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignContent:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999,
        
    },

    cartNumber : {
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:10,
        color: "white",
        alignSelf:"center",
        
    }
})

export default styles;
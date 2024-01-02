import { StyleSheet } from "react-native";;
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    textStyle:{
        fontSize:40,
        fontFamily:"bold"
    },

    appBarWrapper :{
        // marginTop:SIZES.small,
        marginhorizontal:22,
    },

    appBar:{
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor : COLORS.primary,
    },

    location : {
        fontSize: SIZES.medium,
        fontFamily:"medium",
        color: COLORS.gray2,
    },

   
   
})

export default styles;
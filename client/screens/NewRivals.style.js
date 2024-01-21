import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },

    wrapper:{
        flex:1,
        
    },

    upperRow:{
        width:SIZES.width,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.primary,
        zIndex:999,  
        height:50,
    },

    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5,
    },
   
     
})

export default styles; 
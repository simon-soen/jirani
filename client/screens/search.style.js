import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from "../constants"; 


const styles = StyleSheet.create({
    searchContainer:{ 
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"row",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
        marginHorizontal:SIZES.small
    },

    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small
        
    },

    searchWrapper:{
        flex: 1,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.small,
        marginRight:SIZES.small,
        marginTop:SIZES.small

    },

    searchInput:{
        fontFamily:"regular",   
        width:"100%",    
        paddingHorizontal:SIZES.small
    }, 

  searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,
    },

    searchImage: {
        resizeMode: "contain",
        width:SIZES.width-80,
        height:SIZES.height-300,
        opacity:0.9,
    }
});

export default styles;
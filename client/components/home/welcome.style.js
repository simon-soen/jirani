import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../../constants"


const styles = StyleSheet.create({
    container: {
        width : "100%"
    },

    welcomeTxt: (color) => ({   
        fontSize:SIZES.xxLarge -6,
        fontFamily:"bold",
        color:color,
        marginHorizontal:SIZES.small
    }),

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
    }
})

export default styles;
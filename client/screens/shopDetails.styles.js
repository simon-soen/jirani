import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";


const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        height:SIZES.height * 0.4,
        
    },
    header:{
        marginTop:SIZES.height * 0.05,
    },

    totalSales:{
        fontFamily:"semibold",
        fontSize:SIZES.xxLarge,
        color:COLORS.white,
        // textAlign:"center"
    
    },

    totalSalesLabel:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray2,
        // textAlign:"center"
    },

    shopping:{
        width: SIZES.width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginHorizontal:30,
        marginBottom: 20,
        marginTop:SIZES.xxLarge,
     },
     
     iconContainer:{
        height:SIZES.xxLarge*1.3, 
        width:SIZES.xxLarge*1.3,
        borderRadius: 20,
        backgroundColor:COLORS.white,

     },

     shopText:{
        fontFamily: 'regular',
        color: COLORS.gray,
        fontSize: 14,
        lineHeight: 26,
        textAlign:"center"

     },
     body:{
            height:SIZES.height * 0.7,
            backgroundColor:COLORS.lightWhite,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top:-1,
            // marginTop:-SIZES.xxLarge,
            // paddingTop:SIZES.large,
     },

     topSellerContainer:{
        marginTop:SIZES.large,
        marginHorizontal:SIZES.large,
     },

     bodyTitle:{
        fontFamily:"semibold",
        fontSize:SIZES.large,
        color:COLORS.primary,
     
     },

     topSellersWrapper:{
        borderColor: COLORS.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: COLORS.offwhite,    
        height: SIZES.height*0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.large,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 5,
        marginTop:5, 
        marginBottom: 5,
       
     },


});
export default styles;
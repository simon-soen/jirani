import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.lightWhite
      },

    upperRow:{
        flexDirection: 'row',
        marginHorizontal: 20,   
        justifyContent: 'space-between',
        alignItems: 'center',
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width - 40,
        zIndex:1, 
       },

       heart:{
        color:COLORS.primary,
       },

      image:{
         aspectRatio: 1,
         resizeMode: 'cover',
       },

       details:{
        marginTop: -SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
       },

       titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:SIZES.width - 44,
        top:20
       
       },

       title:{
        fontFamily:"bold",
        fontSize:SIZES.large

       },
       
       priceWrapper:{
         backgroundColor:COLORS.secondary,
         borderRadius:SIZES.large
       },

       price:{
        padding:10,
        fontFamily:"semibold",
        fontSize:SIZES.large

       },

      ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:SIZES.width - 10 ,
        top:20
       
       },

      rating:{ 
        top:SIZES.small.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal:SIZES.large  
       },

        ratingText:{
          color:COLORS.gray,
          fontFamily:"medium",
          paddingHorizontal:SIZES.small
        },

       descriptionWrapper:{
        marginTop:SIZES.large+2,
        marginHorizontal:SIZES.large
       },

       description:{
        fontFamily:"medium",
        fontSize:SIZES.large
       },

       descriptionText:{
        fontFamily:"regular",
        fontSize:SIZES.large,
        marginBottom:SIZES.small,
        textAlign:"justify",


       },

       locationWrapper:{
        marginBottom:SIZES.small,
       },

       Location:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        backgroundColor:COLORS.secondary,
        padding:5,
        borderRadius:SIZES.large,
        margginHorizontal:12
       },

       locationWrap:{
        flexDirection: 'row',
       },

       cartRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:SIZES.width ,
       },

       cartBtn:{
        width:SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius:SIZES.large,
        marginLeft:12
       },

       cartTitle:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:SIZES.small
       },

       addCart:{
        width:37,
        height:37,
        borderRadius:15,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:"center"
       },

       fonti:{
        color:COLORS.lightWhite,
       }



       

})

export default styles; 
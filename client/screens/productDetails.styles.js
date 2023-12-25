import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.darkblue
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
        color:COLORS.red,
       },

      image:{
         aspectRatio: 1,
         resizeMode: 'cover',
       },

       details:{
        marginTop: -SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
       
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
        fontSize:SIZES.xxLarge/1.4,

       },
       
       priceWrapper:{
         backgroundColor:COLORS.secondary,
         borderRadius:SIZES.large
       },

       price:{
        marginHorizontal: 20,
        fontFamily:"semibold",
        fontSize:SIZES.large*1.4,
        color:COLORS.lightWhite
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
        marginHorizontal:SIZES.large,
        height: SIZES.height * 0.2,
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
        backgroundColor:COLORS.lightWhite,
        padding:5,
        borderBottomLeftRadius:SIZES.xLarge,
        borderBottomRightRadius:SIZES.xLarge,
        margginHorizontal:12
       },

       locationWrap:{
        flexDirection: 'row',
        marginHorizontal: SIZES.large,  
       
       },

       cartRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        alignItems: 'center',
        width:SIZES.width ,
        top:20,
       },

        similar :{
          fontFamily:"bold",
          fontSize:SIZES.large*1.5,
          marginHorizontal:SIZES.large,
        },

        buyBtn:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          width:SIZES.width*0.54,
          backgroundColor:COLORS.lightWhite,
          height:SIZES.xxLarge*1.3,
          borderRadius:SIZES.large,
          margin:12,
      
        },

       cartBtn:{
        width:SIZES.width*0.4,
        
       
        
       },

       cartTitle:{
        fontFamily:"bold",
        fontSize:22,
        color:COLORS.darkblue,
        backgroundColor:COLORS.lightWhite,
        borderBottomRightRadius:SIZES.large,
        borderTopRightRadius:SIZES.large,
        borderColor:COLORS.darkblue,
        borderWidth: 1, 
        marginLeft:SIZES.small/5,
        padding: 10,
        paddingHorizontal:SIZES.large,
       },

       

       addCart:{
        width:57,
        height:57,
        backgroundColor:COLORS.darkblue,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor: COLORS.white , 
        borderBottomLeftRadius:SIZES.large,
        borderTopLeftRadius:SIZES.large,
       },

       fonti:{
        color:COLORS.lightWhite,
       }



       

})

export default styles; 
import { StyleSheet } from "react-native";
import { SIZES, COLORS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primary
      },

    upperRow:{
        flexDirection: 'row',
        marginHorizontal: 20,   
        justifyContent: 'space-between',
        alignItems: 'center',
        position:"absolute",
        top:SIZES.xLarge,
        width:SIZES.width - 40,
        zIndex:1, 
       },

       heart:{
        color:COLORS.red,
       },
       imageWrapper:{
        height: SIZES.height * 0.4,
       },
      image:{
         aspectRatio: 5/4.2,
         resizeMode: 'stretch'
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
        fontSize:SIZES.xLarge,

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
          fontSize:SIZES.medium,
          fontFamily:"medium",
          paddingHorizontal:SIZES.small
        },

        

       descriptionWrapper:{
        marginTop:SIZES.large+2,
        marginHorizontal:SIZES.large,
        height: SIZES.height * 0.28,
       },

       description:{
        fontFamily:"medium",
        fontSize:SIZES.large
       },

       descriptionText:{
        fontFamily:"regular",
        fontSize:SIZES.medium,
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
        color:COLORS.primary,
        backgroundColor:COLORS.lightWhite,
        borderBottomRightRadius:SIZES.large,
        borderTopRightRadius:SIZES.large,
        borderColor:COLORS.primary,
        borderWidth: 1, 
        marginLeft:SIZES.small/5,
        padding: 10,
        paddingHorizontal:SIZES.large,
       },

       

       addCart:{
        width:57,
        height:57,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor: COLORS.white , 
        borderBottomLeftRadius:SIZES.large,
        borderTopLeftRadius:SIZES.large,
       },

       fonti:{
        color:COLORS.lightWhite,
       },


       modalContainer:{
        flex:1,
        width:SIZES.width,
        backgroundColor:COLORS.lightWhite,
        // justifyContent:"center",
        // alignItems:"center",
        // marginHorizontal:SIZES.large,
        borderRadius:SIZES.large,
        height:SIZES.height*0.8,
        top:SIZES.height*0.3,
        // position:"absolute",
        zIndex:1,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:COLORS.offwhite,
       
       },

       modalContent:{
        height:SIZES.height*0.61,
        padding:SIZES.large,

       },

       modalHeader:{
          flexDirection:"row",
          justifyContent:"space-between",
       },

       modalTitle:{
        fontFamily:"bold",
        fontSize:SIZES.xLarge,
        color:COLORS.primary,
        // marginHorizontal:SIZES.width*0.2,
       },

       labels:{
        fontFamily:'regular',
        fontSize: SIZES.medium*0.8,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right',
        color:COLORS.primary,
        
       },

       wrapper: {
        marginBottom:20,
    },

    inputWrapper: {
      borderColor: COLORS.primary,
      height: 80,
      backgroundColor:COLORS.lightWhite,
      borderWidth:1, 
      height:55,
      borderRadius:5,
      flexDirection:'row',            
      paddingHorizontal:15,
      alignItems:'center', 

  },
  

       paymentMethodContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginBottom: SIZES.small, // Fix the typo here
        flexDirection: "row",
        borderRadius: SIZES.small,
        padding: SIZES.medium,
        backgroundColor: "#fff",
        ...SHADOWS. medium,
        shadowColor: COLORS.lightWhite,
        marginBottom:20,

       },

       mpesaImageContainer:{
        width:SIZES.width*0.3, 
        height: SIZES.xxLarge,
        backgroundColor:COLORS.secondary,
        justifyContent:"center",
        alignItems:"center",
       },

      mpesaImage:{
        width:"100%",
        height: SIZES.xxLarge,
        resizeMode:"cover",
      },
        mpesaNo:{
          fontFamily:"bold",
          fontSize:SIZES.large,
          color:COLORS.gray,
        },

        itemContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,
        flexDirection: "row",
        borderRadius: SIZES.small,
        padding: SIZES.medium,
        backgroundColor: "#fff",
        ...SHADOWS. medium,
        shadowColor: COLORS.lightWhite,
        height: SIZES.xxLarge*2.4,
        
       
      },
      

      itemImage:{
       width: 105, 
       height: SIZES.xxLarge*1.9,
       backgroundColor:COLORS.secondary,
       borderRadius:SIZES.medium,
       justifyContent:"center",
       alignItems:"center",
    },

    itemImg:{
        width:"100%",
        height: "100%",
        borderRadius:SIZES.small,
        resizeMode:"cover",
    },

    textContainer:{
        flex:1,
        padding:SIZES.small,
    },

    productTitle:{
        fontSize:SIZES.medium,
        fontFamily:"bold",
        color:COLORS.primary,  
    },

    supplier:{
        fontSize:SIZES.small + 2,
        fontFamily:"regular",
        color:COLORS.gray,   
        marginTop: 1
    
    },

    quantityInputContainer:{
      backgroundColor:COLORS.lightWhite,
      borderWidth:1, 
      height:55,
      color:COLORS.primary,
      flexDirection:'row',    
      justifyContent:'space-between', 
      paddingHorizontal:15,
      alignItems:'center', 
    },



        bottomBar:{
          flexDirection:"row",
          width:SIZES.width,
        },

       totalBtn:{
        width:SIZES.width*0.5,
        height:SIZES.xxLarge*1.3,
        backgroundColor:COLORS.lightWhite,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor: COLORS.primary , 
        // borderTopLeftRadius:SIZES.medium,
       },
       
       confirmBtn:{
        width:SIZES.width*0.6,
        height:SIZES.xxLarge*1.3,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor: COLORS.primary , 
        // borderTopRightRadius:SIZES.medium,
       },

       totalBtnText:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
        color:COLORS.primary,
       },

       confirmBtnText:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        color:COLORS.lightWhite,
        
       }

})

export default styles; 
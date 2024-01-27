import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from "../constants"; 


const styles = StyleSheet.create({
     container: {
      backgroundColor:COLORS.primary,
      height:SIZES.height * 0.4,
      alignItems: 'center',

     },

     header:{
      alignItems: 'center',
   },

     upperRow:{
      marginLeft:45,
      justifyContent:'flex-start',
      top:SIZES.xLarge,
      width:SIZES.width,
     },

    


     cover:{
      //   height: 253,
        width: '100%',
        resizeMode: 'cover',
     },

     profileContainer: {
      height:SIZES.height * 0.7,
      backgroundColor:COLORS.lightWhite,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      top:-15,
     },

     pofile:{
        height: 135,
        width: 135,
        borderRadius: 999,
        borderColor: COLORS.primary,
        resizeMode: 'cover',
        borderWidth: 2,
        marginTop: 16,
        marginLeft: 30,
     }, 

     name:{
        fontFamily: 'bold',
        color: COLORS.words,
         marginVertical: 5,
         marginLeft: 35,
         // marginTop: 20,
     },
    

     loginBtn:{
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge,
        marginLeft: 15,
        marginTop: 3,
        marginBottom: 15,
     },

     email:{
      marginHorizontal:10,
     },

     shopping:{
         width: SIZES.width * 0.8,
         flexDirection: 'row',
         justifyContent: 'space-between',
         marginHorizontal:60,
         marginBottom: 20,
      },
      
      iconContainer:{
         height:SIZES.xxLarge*1.4, 
         width:SIZES.xxLarge*1.4,
         borderRadius: 999,
      },

      shopText:{
         fontFamily: 'regular',
         color: COLORS.gray,
         fontWeight: '600',
         fontSize: 14,
         lineHeight: 26,
      },

     menuText:{
        fontFamily: 'regular',
        color: COLORS.gray,
        fontWeight: '600',
        marginLeft: 20,
        fontSize: 14,
        lineHeight: 26,
        marginRight: 20,
     },

     menuWrapper:{
        marginTop:SIZES.medium,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
     },

     menuItem: (borderBottomWidth) =>({
        borderBottomWidth: borderBottomWidth,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor: COLORS.gray,
     })
})


export default styles;
import {StyleSheet} from 'react-native';
import { SIZES, COLORS } from '../constants';

const styles = StyleSheet.create({


    wrapper: {
        marginBottom:20,
    },

    label:{
        fontFamily:'regular',
        fontSize: SIZES.small,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right',
        color:COLORS.primary,
    },

    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1, 
        height:55,
        borderRadius:12,
        flexDirection:'row',            
        paddingHorizontal:15,
        alignItems:'center', 

    }),
    textInput:{
        fontSize:SIZES.large - 3,
    },

    errorMessage:{
        color:COLORS.red,
        fontFamily:'regular',
        marginTop:5,
        marginLeft:5,
        fontSize:SIZES.xSmall,
    },

    picker: {
        backgroundColor:COLORS.lightWhite,
        borderWidth:1, 
        height:55,
        color:COLORS.primary,
        flexDirection:'row',            
        paddingHorizontal:15,
        alignItems:'center', 
      },

      pickerItem: {
        color: COLORS.black,
        fontSize: 16,
        textAlign: 'center',
        fontSize: SIZES.large-3,
      },

      //create shop
      cover:{
        height: 173,
        width: '100%',
        resizeMode: 'cover',
        alignContent: 'center',
        justifyContent: 'center',
     },

    profileContainer: {
        flex: 1,
        alignItems: 'center',
    },

     pofile:{
        height: 135,
        width: 135,
        borderRadius: 999,
        borderColor: COLORS.primary,
        resizeMode: 'cover',
        borderWidth: 2,
        marginTop: 16,
     }, 

     modalContainer:{
        flex:1,
        width:SIZES.width,
        backgroundColor:COLORS.white,
        // justifyContent:"center",
        // alignItems:"center",
        // marginHorizontal:SIZES.large,
        borderRadius:SIZES.large,
        height:SIZES.height*0.8,
        top:SIZES.height*0.1,
        // position:"absolute",
        zIndex:1,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:COLORS.white,
       },

       modalContent:{
        height:SIZES.height*0.61,
        padding:SIZES.large,

       },

       modalHeader:{
        alignItems:"center",
        alignContent:"center",
     },

     modalHeaderLabel:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.primary,
     },

       linkText:{
        color:COLORS.deepblue,
        fontFamily:'bold',
        // fontSize:SIZES.large,
        textAlign:'center',
        marginTop:10,
        textDecorationLine:'underline',
       
       },

       tierContainer:{
        borderColor: COLORS.primary,
        // borderWidth: 1,
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
        shadowOpacity: 0.9, // Adjust the opacity as needed
        shadowRadius: 3,
        elevation: 5, // For Android
        marginBottom: 5, // Margin at the bottom
        marginLeft: 5, // Margin on the left
        marginRight: 5, // Margin on the right
        
       },

       supplier:{
        fontSize:SIZES.small + 2,
        fontFamily:"regular",
        // color:COLORS.gray,   
        marginTop: 1
    
    },

    pricing:{
        fontSize:SIZES.large,
        fontFamily:"bold",
        color:COLORS.primary,  
        marginTop: 1
    
    }, 
    benefits:{
        fontSize:SIZES.medium*0.8,
        fontFamily:"semibold",
        color:COLORS.black,   
        marginTop: 1,
        textDecorationLine:'underline',
    
    
    }


})

export default styles;
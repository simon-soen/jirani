import {StyleSheet, Dimensions} from 'react-native';
import { SIZES, COLORS, MAX_HEIGHT, MAX_WIDTH } from '../constants';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        maxHeight: screenHeight > 500 ? MAX_HEIGHT : '70%',
        alignSelf: 'center',  
        justifyContent:'center',
        backgroundColor:COLORS.beige,
    },  
    cover:{
        width:SIZES.width,
        maxHeight: screenHeight > 100 ? MAX_HEIGHT : '70%',
        maxWidth: screenWidth > 1000 ? MAX_WIDTH.mLarge : '100%', // Apply maxWidth on larger screens
        alignSelf: 'center',
        resizeMode:'contain',
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:SIZES.xxLarge,
        borderBottomRightRadius:SIZES.xxLarge,
        paddingBottom:73,
    },


    bottom:{
        height:screenHeight * 0.22,
        width:SIZES.width,
        maxWidth:MAX_WIDTH.mLarge,
        resizeMode:'contain',        
        alignSelf: 'center',
    },
 

    title: {
        fontFamily:'bold',
        fontSize: SIZES.xxLarge,
        color: COLORS.words,
        alignItems:'center',
        marginBottom:SIZES.xxLarge,
        marginTop:SIZES.xxLarge,
    },

    wrapper: {
        marginBottom:20,
    },

    label:{
        fontFamily:'regular',
        fontSize: SIZES.small,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right',
        color:COLORS.words,
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

    iconStye:{
        marginRight:10,
    },

    errorMessage:{
        color:COLORS.red,
        fontFamily:'regular',
        marginTop:5,
        marginLeft:5,
        fontSize:SIZES.xSmall,
    },

    registrations:{
        marginTop:SIZES.xxLarge*1.3,
        marginRight:SIZES.xxLarge*1.5,
        textAlign:'center',
        color:COLORS.words,
        fontFamily: "regular",
        fontSize:SIZES.large,
    
        

    }

})

export default styles;
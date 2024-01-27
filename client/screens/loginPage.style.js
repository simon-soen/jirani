import {StyleSheet, Dimensions} from 'react-native';
import { SIZES, COLORS, MAX_WIDTH, MAX_HEIGHT } from '../constants';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({

    container:{
        // height: screenHeight,
        // maxWidth: screenWidth > 1000 ? MAX_WIDTH.mLarge : '100%', // Apply maxWidth on larger screens
        // maxHeight: screenHeight > 500 ? MAX_HEIGHT : '70%',
        alignSelf: 'center',  
        justifyContent:'center',
        backgroundColor:COLORS.beige,
    },  
    cover:{
        // height: screenHeight*0.4,
        // maxHeight: screenHeight > 1000 ? MAX_HEIGHT.hLarge : '70%',
        width:SIZES.width,
        maxWidth: screenWidth > 1000 ? MAX_WIDTH.mLarge : '100%', // Apply maxWidth on larger screens
        alignSelf: 'center',
        // maxWidth:MAX_WIDTH.mLarge,
        resizeMode:'contain',
        paddingBottom:20,
        backgroundColor:COLORS.primary
    },
    middle:{
        height: screenHeight * 0.466,
        width:SIZES.width,
        maxWidth: screenWidth > 1000 ? MAX_WIDTH.mLarge : '100%', // Apply maxWidth on larger screens
        resizeMode:'stretch',
        alignSelf: 'center',
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius: SIZES.height/2.3,
        
    },
    bottom:{
        height: screenHeight * 0.14,
        width:SIZES.width/2,
        maxWidth: screenWidth > 500 ? MAX_WIDTH.mLarge : '50%', // Apply maxWidth on larger screens
        resizeMode:'contain',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        borderTopRightRadius:SIZES.height - (SIZES.height / 2.5) - (SIZES.height / 2.4),
    },

    title: {
        fontFamily:'bold',
        fontSize: SIZES.xxLarge,
        color: COLORS.words,
        alignItems:'center',
        marginBottom:SIZES.xxLarge,
        marginTop:SIZES.xxLarge,
        marginLeft:SIZES.large,
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
    
        

    },

    

})

export default styles;
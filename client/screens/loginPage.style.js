import {StyleSheet} from 'react-native';
import { SIZES, COLORS } from '../constants';

const styles = StyleSheet.create({
    cover:{
        height:SIZES.height/2.5,
        width:SIZES.width,
        resizeMode:'contain',
      
        backgroundColor:COLORS.darkblue
    },
    middle:{
        height:SIZES.height/2.3,
        width:SIZES.width,
        resizeMode:'contain',
        backgroundColor:COLORS.darkblue,
        borderBottomLeftRadius: SIZES.height/2.3,
        
    },
    bottom:{
        height: SIZES.height - (SIZES.height / 2.5) - (SIZES.height / 2.4),
        width:SIZES.width/2,
        resizeMode:'contain',
        marginBottom:SIZES.xxLarge,
        backgroundColor:COLORS.darkblue,
        borderTopRightRadius:SIZES.height - (SIZES.height / 2.5) - (SIZES.height / 2.4),
    },

    title: {
        fontFamily:'bold',
        fontSize: SIZES.xxLarge,
        color: COLORS.words,
        alignItems:'center',
        marginBottom:SIZES.xxLarge,
        marginTop:SIZES.xxLarge
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
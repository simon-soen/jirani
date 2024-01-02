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

})

export default styles;
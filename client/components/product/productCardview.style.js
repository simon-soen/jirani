import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 248,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginRight: SIZES.small,
        
    },

    imageContainer: {
      flex: 1,
      width: 170,
      marginLeft:SIZES.small/2,
      marginTop:SIZES.small/2,
      overflow: 'hidden',
      borderRadius: SIZES.small,
    
    },
 
    image:{
        aspectRatio: 1,
        resizeMode: 'cover', 
    },

    details:{
        padding: SIZES.small,
    },

    title:{
        fontFamily: 'bold', 
        fontSize: SIZES.large, 
        marginBottom:2
    },

    supplier:{
        fontFamily: "regular", 
        fontSize: SIZES.small, 
        color: COLORS.gray,
    },

    price:{
        fontFamily: 'bold', 
        fontSize: SIZES.medium, 
    },

    addBtn:{
        position: 'absolute',
        bottom: SIZES.xSmall,
        right: SIZES.xSmall,
    },
 
 });   
    
export default styles; 
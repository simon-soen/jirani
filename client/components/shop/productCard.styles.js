import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
   
    container: {
        width: 390,
        height: 180,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginRight: SIZES.small,
        marginBottom: SIZES.small,
        marginHorizontal: SIZES.small/1.5,
        
    },

    imageCont:{
        height: 170,
        flexDirection: 'row',
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
        fontSize: SIZES.small*1.3, 
        color: COLORS.gray,
    },

    price:{
        fontFamily: 'bold', 
        fontSize: SIZES.medium*1.2, 
        marginBottom:3
    },

    info:{
        fontFamily: 'semibold', 
        fontSize: SIZES.medium*1.2, 
        marginBottom:4
    },

    deleteBtn:{
        position: 'absolute',
        bottom: SIZES.large*0.6,
        right: SIZES.xSmall,
    },
    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width:SIZES.width - 10 ,
        // top:20
       
       },

      rating:{ 
        top:SIZES.small.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginHorizontal:SIZES.large  
       },

        ratingText:{
          color:COLORS.gray,
          fontFamily:"medium",
          paddingHorizontal:SIZES.small
        },

 
 });   
    
export default styles; 
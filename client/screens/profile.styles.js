import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from "../constants"; 


const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
     },

     cover:{
        height: 290,
        width: '100%',
        resizeMode: 'cover',
     },

     profileContainer: {
        flex: 1,
        alignItems: 'center',
     },

     pofile:{
        height: 155,
        width: 155,
        borderRadius: 999,
        borderColor: COLORS.primary,
        resizeMode: 'cover',
        borderWidth: 2,
        marginTop: -90,
     }, 

     name:{
        fontFamily: 'bold',
        color: COLORS.primary,
         marginVertical: 5
     },

     loginBtn:{
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge
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
        marginTop:SIZES.xxLarge,
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
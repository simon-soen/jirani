import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {SliderBox} from "react-native-image-slider-box"; 
import { COLORS, SIZES } from "../../constants";

const Carousel = () => {
    const slides = [
        
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg", 
        "https://bucketeer-897a58fa-5a33-4dbf-aa4a-7ab2e1c7ea29.s3.us-east-1.amazonaws.com/products/1706972945323-7193325f-fccb-459f-8b73-3b1f536d21ac.jpeg",
        "https://bucketeer-897a58fa-5a33-4dbf-aa4a-7ab2e1c7ea29.s3.us-east-1.amazonaws.com/products/1706948762619-998050be-6100-4cfe-a7db-4fb0a506b3ff.jpeg",
        "https://bucketeer-897a58fa-5a33-4dbf-aa4a-7ab2e1c7ea29.s3.us-east-1.amazonaws.com/products/1706955110795-4de8daab-cb34-4310-9b7a-2b1b7507edc4.jpeg"


    ]
    const  aspectRatio = 2/3.92; //width/height
  return (
    <View style={styles.carouselContainer}> 
        <SliderBox images={slides} //adding sliding immages
            dotColor= {COLORS.primary }
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle = 
            {{
                borderRadius: 15, 
                width: SIZES.width * 0.93,
                height: SIZES.width * 0.93 * aspectRatio,
                marginTop: 5,

            }} 
            autoplay
            circleLoop  //to make the images slide in a loop 
        />
    </View>  
  )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,  
        alignItems: "center",
    }
})

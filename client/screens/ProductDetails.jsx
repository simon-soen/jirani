import { TouchableOpacity,View, Text, Image, ScrollView, Modal, TextInput} from "react-native";
import React, {useState}from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./productDetails.styles";
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from "@expo/vector-icons";
import { addToCart } from "../components/cart/CartUtils";
import { addToFav } from "../components/cart/FavUtils";
import { Alert } from "react-native";
import { COLORS, SIZES } from "../constants";
import { placeOrder } from "../components/order/OrderUtils"; 

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  const [count, setCount] = useState(1)
//   const [quantity, setQuantity] = useState("1")
  const [isModalVisible, setModalVisible] = useState(false);

 const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const increment = () => {
    setCount(count + 1)
  }


  const decrement = () => {
    
    if(count > 1){
      setCount(count - 1)
    }
  }
  const handleAddToCart = async () => {
    const cartItem = item._id;
    const quantity = count;
    await addToCart(cartItem, quantity);
  };

  handlePlaceOrderButton = async () => {
    const orderItem = item._id;
    const quantity = count;
    await placeOrder(orderItem, quantity);
  
  }

  const calculatedTotal = () => {
    const parsedCount = parseInt(count, 10);
    const interest = 1.09;
    return parsedCount * item.price * interest;
  }
 

//   const handleAddToFavorites = async () => {
//     try {
//       const favItem = item._id;
//       const response = await addToFav(favItem);
  
//       if (response && response.ok) {
//         const data = response.data;
       
//         if (data === "Product added to favorite") {
//           console.log('Product added to favorite. Showing alert.');
//           Alert.alert('Success!', 'Product added to favorites.');
//        } else if (data === "Item already exists in favorite") {
//           console.log('Item already exists in favorite. Showing alert.');
//           Alert.alert('Oops!', 'Item already exists in favorites.');
//        } else {
//           console.log('Unexpected response. Showing alert.');
//           Alert.alert('Unexpected Response', 'An unexpected response was received from the server.');
//        }
//     } else {
//        console.log('Server returned an error with status:', response.status);
//        Alert.alert('Error', 'You are not logged in');
//     }
 
    
//       } catch (error) {
//         // console.error('Error adding product to favorite:', error);
//         // Alert.alert('Error', 'There was an error adding the product to favorites.');
//         // Handle other types of errors in the UI
//       }
//   };
  

  return (
    <ScrollView style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size={30}/> 
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={()=>handleAddToFavorites()}>
                <Ionicons style={styles.heart}name='heart' size={30}/> 
            </TouchableOpacity> */}
        </View>
        <View style={styles.imageWrapper}>
            <Image
                source={{
                 uri: `${item.imageUrl}`,
                }}
                style={styles.image}
            />
        </View>
        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rating}>

                <TouchableOpacity  style={{color: COLORS.darkblue}} onPress={() =>decrement( )}>
                        <SimpleLineIcons 
                            name='minus' 
                            size={20 }
                        />
                    </TouchableOpacity>

                    <Text style={styles.ratingText}> {count} </Text>

                    <TouchableOpacity onPress={() =>increment()}>
                        <SimpleLineIcons 
                            name='plus' 
                            size={20 }/>
                    </TouchableOpacity>

                  

                </View>
            </View>
            <View style={styles.ratingRow}>  
                <View style={styles.rating}>
                    {[1,2,3,4,5].map((index) => (
                        <Ionicons
                            key={index} 
                            name='star' 
                            size={24} 
                            color="gold"/>
                    ))}
                     <Text style={styles.ratingText}> (4.9) </Text>

                </View>

               
             </View> 

             <ScrollView style={styles.descriptionWrapper}>
                <Text style={styles.description}> Description</Text>
                <Text style={styles.descriptionText}>
                    {item.description}
                </Text>
            </ScrollView> 
            </View>
            <View style={styles.locationWrapper}>
               
                <View style={styles.Location}>

                <Text style={styles.similar}></Text>
                    {/* <View style={styles.locationWrap}>
                        <Ionicons name='location-outline' size={20}/>
                        <Text>{item.pronduct_location}</Text> 
                    </View>
                        
                      */}
                </View>
            </View>
          
            <View style={styles.cartRow}>
                <View>
                    <Text style={styles.price}>ksh {item.price}</Text>
                    <View style={styles.locationWrap}>
                        <Text style={{color:COLORS.lightWhite}}>Free Delivery</Text> 
                        <MaterialCommunityIcons style={{color:COLORS.lightWhite, marginHorizontal:20}} name='truck-delivery' size={20}/>
                      
                    </View>
                </View>
                <View style={styles.buyBtn}>
                    <TouchableOpacity onPress={()=>handleAddToCart()} style={styles.addCart}>
                        <Fontisto style={styles.fonti}  name='shopping-bag' size={23}/> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={toggleModal}

                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>Purchase product</Text>
                                    <TouchableOpacity onPress={toggleModal} style={styles.closeModalBtn}>
                                        <Ionicons 
                                            name='close' 
                                            size={36}
                                            color={COLORS.primary}
                                        /> 
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.labels}>shipping informatoion</Text>
                                    <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="State the location and a noticeable landmark..."
                                        value=""
                                        // onChangeText={setDescription}
                                        multiline={true}
                                        numberOfLines={4}
                                        style={{ flex: 1, textAlignVertical: 'top', fontSize: SIZES.large - 3, padding:5 }}
                                    />
                                    </View>
                                    </View>
                               

                                <View>
                                    <Text style={styles.labels}>Payment method</Text>
                                    <TouchableOpacity onPress={{}}>
                                    
                                        <View 
                                            style={[
                                                {
                                                  borderColor: COLORS.primary,
                                                  borderWidth: 1,
                                                  paddingHorizontal: 15,
                                                  paddingVertical: 10,
                                                  borderRadius: 5,
                                                  backgroundColor: COLORS.white,    
                                                  height: 70,
                                                  flexDirection: 'row',
                                                  justifyContent: 'space-between',
                                                },
                                              ]}
                                        >
                                            <View style={styles.mpesaImageContainer}>
                                                <Image
                                                    source={require('../assets/images/mpesa.png')}
                                                    style={styles.mpesaImage}
                                                    
                                                />
                                                </View>
                                                <View>
                                                <Text style={styles.mpesaNo}>Mpesa No</Text>
                                                <Text>0740524375</Text>
                                            </View>
                                        </View>
                                        
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{top:20,}}>
                                    <Text style={styles.labels}>item</Text>
                                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ProductDetails', {item})}>
                                        <View style={styles.textContainer}>
                                            <View style={{
                                                flexDirection:"row",
                                                justifyContent:"space-between",
                                                }}
                                            >
                                                <Text style={styles.productTitle}>{item.title}</Text>
                                                <Text style={styles.supplier}>Ksh {item.price}</Text>
                                            </View>
                                            <Text style={styles.supplier} numberOfLines={3}>{item.description} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{top:20,}}>
                                  <Text style={styles.labels}>No.of Items</Text>
                                    <View style={styles.quantityInputContainer}>
                                        <Text>Quantity:</Text>
                                        <View style={styles.rating}>
                                            <TouchableOpacity  style={{color: COLORS.darkblue}} onPress={() =>decrement( )}>
                                                <SimpleLineIcons 
                                                    name='minus' 
                                                    size={20 }
                                                />
                                            </TouchableOpacity>

                                            <Text style={styles.ratingText}> {count} </Text>

                                            <TouchableOpacity onPress={() =>increment()}>
                                                <SimpleLineIcons 
                                                    name='plus' 
                                                    size={20 }/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>                                  
                            </View>
                            
                            <View style={styles.bottomBar}>
                                <TouchableOpacity onPress={toggleModal} style={styles.totalBtn}>
                                    <Text style={styles.totalBtnText}>Total: ksh {calculatedTotal()}</Text>       
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>handlePlaceOrderButton()} style={styles.confirmBtn}>
                                    <Text style={styles.confirmBtnText}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>
              
            </View>
        
    </ScrollView>
    
  )
}

export default ProductDetails;
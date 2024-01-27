import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, Image, Modal, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateShopHeader  from '../components/shop/CreateShopHeader';
import styles from "./addProducts.styles";
import { COLORS, SIZES } from '../constants';
import { ButtonSignup } from "../components";
// import CheckBox from '@react-native-community/checkbox';


const CreateShop = ({navigation}) => {
  const [shopData, setShopData] = useState({
    shopName: '',
    shopLocation: '',
    shopBio: '',
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
        if (userId) {
          setUserId(userId);
        }
      } catch (error) {
        console.error('Error fetching userId from AsyncStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  const handleChange = (fieldName, value) => {
    setShopData({
      ...shopData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!userId) {
        console.error('userId not available');
        return;
      }

      const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/shop/${userId.replace(/"/g, '')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shopData),
      });

      if (response.ok) {
        const responseData = await response.json();
        navigation.replace('Shop')

        console.log('Shop created successfully:', responseData);
      } else {
        // Handle non-OK response (e.g., 404 Not Found)
        console.log('Shop creation failed. Status:', response.status);

        // Optionally, log the response text
        const responseText = await response.text();
        console.log('Response text:', responseText);
      }
    } catch (error) {
      console.log('Error creating shop:', error.message);
    }
  };

  return (
    <SafeAreaView style={{  marginHorizontal: 20, marginTop: 40 }}>
        <CreateShopHeader />
        <View style={{marginTop:20}}>

            <View style={styles.cover}>
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../assets/images/shop.jpeg')}
                        style={styles.pofile}
                    />
                </View>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.label}>Shop Name</Text>
                <View style={styles.inputWrapper(COLORS.primary)}>
                    <TextInput
                        style={styles.input}
                        placeholder="Shop Name"
                        value={shopData.shopName}
                        onChangeText={(text) => handleChange('shopName', text)}
                    />
                </View>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.label}>Shop Location</Text>
                <View style={styles.inputWrapper(COLORS.primary)}>
                    <TextInput
                        style={styles.input}
                        placeholder="Shop Location"
                        value={shopData.shopLocation}
                        onChangeText={(text) => handleChange('shopLocation', text)}
                    />
                </View>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.label}>Shop Bio</Text>
                <View style={styles.inputWrapper(COLORS.primary)}>
                    <TextInput
                        // style={styles.input}
                        placeholder="Shop Bio"
                        value={shopData.shopBio}
                        onChangeText={(text) => handleChange('shopBio', text)}
                         multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1, textAlignVertical: 'top', fontSize: SIZES.large - 3, padding:8}}
                    />
                </View>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.conditionTxt}>
                    By creating a shop, you agree to our{' '}
                    <Text style={styles.linkText} onPress={toggleModal}>
                    Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.linkText} onPress={toggleModal}>
                    Privacy Policy
                    </Text>
                </Text>

                <Modal
                   animationType="slide"
                   transparent={true}
                   visible={isModalVisible}
                   onRequestClose={toggleModal}
                    >
                    <View style={styles.modalContainer}>
                      <ScrollView style={[styles.modalContent, {marginBottom:70}]}>
                          <View style={{marginBottom:25}}>
                            <View style= {styles.modalHeader}>
                                <Text style= {styles.modalHeaderLabel}>Terms of service & Privacy Policy</Text>
                            </View>
                            <Text style={[styles.supplier, {marginHorizontal:8}]}>
                                When you open a shop in our platform, you can choose from the following tiers:
                            </Text>

                              {/* Default Tier */}
                            <View style={styles.tierContainer}>
                                <View>
                                    <Text style={styles.modalHeaderLabel}>Default Store</Text>
                                    <Text style={styles.supplier}>Best for sellers who have a handful of products and want a storefront to brand and promote their business.</Text>
                                    <Text style={styles.pricing}>Free</Text>
                                    <Text style={styles.benefits}>Benefits:</Text>
                                    <Text style={styles.supplier}>- Up to 20 product listings</Text>
                                    <Text style={styles.supplier}>- Access to exclusive seller features</Text>
                                </View>
                            </View>

                            {/* Starter Tier */}
                            <View style={styles.tierContainer}>
                                <View>
                                    <Text style={styles.modalHeaderLabel}>Starter Store</Text>
                                    <Text style={styles.supplier}>Best for sellers who have a handful of products and want a storefront to brand and promote their business.</Text>
                                    <Text><Text style={styles.pricing}>Ksh 500</Text>/mo</Text>
                                    <Text style={styles.benefits}>Benefits:</Text>
                                    <Text style={styles.supplier}>- Up to 50 product listings</Text>
                                    <Text style={styles.supplier}>- Access to exclusive seller features</Text>
                                </View>
                            </View>

                              {/* Basic Tier */}
                            <View style={styles.tierContainer}>
                                <View>
                                    <Text style={styles.modalHeaderLabel}>Basic Tier</Text>
                                    <Text style={styles.supplier}>Best for sellers who have a large inventory of products and want a storefront to brand and promote their business.</Text>
                                    <Text><Text style={styles.pricing}>Ksh 1,000</Text>/mo</Text>
                                    <Text style={styles.benefits}>Benefits:</Text>
                                    <Text style={styles.supplier}>- Up to 200 product listings</Text>
                                    <Text style={styles.supplier}>- Increased visibility in search results</Text>
                                </View>
                            </View>
                            {/* Premium Tier */}
                            <View style={styles.tierContainer}>
                                <View>
                                    <Text style={styles.modalHeaderLabel}>Premium Tier</Text>
                                    <Text style={styles.supplier}>If you have an extensive product assortment, a Premium Store subscription gives you substantially more zero insertion fee listings.</Text>
                                    <Text><Text style={styles.pricing}> Ksh 2,500</Text>/mo</Text>
                                    <Text style={styles.benefits}>Benefits:</Text>
                                    <Text style={styles.supplier}>- Up to 500 product listings</Text>
                                    <Text style={styles.supplier}>- Priority customer support</Text>
                                </View>
                            </View>

                            {/* Anchor Tier */}
                            <View style={styles.tierContainer}>
                              <View>
                                  <Text style={styles.modalHeaderLabel}>Anchor Tier</Text>
                                  <Text style={styles.supplier}>For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.</Text>

                                  <Text><Text style={styles.pricing}>Ksh 5,000</Text>/mo</Text>
                                  <Text style={styles.benefits}>Benefits:</Text>
                                  <Text style={styles.supplier}>- Unlimited product listings</Text>
                                  <Text style={styles.supplier}>- Advanced analytics and reporting</Text>
                              </View>
                            </View>

                            {/* Enterprise Tier */}
                            <View style={[styles.tierContainer, {bottom:10}]}>
                              <View>
                                  <Text style={styles.modalHeaderLabel}>Enterprise Tier</Text>
                                  <Text style={styles.supplier}>Contact us for custom pricing and benefits tailored to your business needs.</Text>
                              </View>

                            </View>
                              {/* Insertion fees and Zero insertion fee listings */}
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>
            </View>

            <ButtonSignup
                title="Create Shop"
                onPress={handleSubmit}
                loader={false}
            />
        </View>
    </SafeAreaView>
  );
};


export default CreateShop;
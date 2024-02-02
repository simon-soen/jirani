import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, Alert, Image, TouchableOpacity } from 'react-native';
import styles from "./addProducts.styles";
import Selling from "../components/shop/Selling";
import { COLORS, SIZES } from '../constants';
import { BackBtn, ButtonSignup, SelectComp } from "../components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../components/home/categories';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";
import mime from 'mime';


const AddProduct = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [file, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [product_location, setProductLocation] = useState('');
  const [selectedValue, setSelectedValue] = useState('');



  const pickImage = async () => {
    try {
      let result = await launchImageLibraryAsync();
      if (!result.cancelled) {
        setImage(result);
        console.log('Image picked successfully:', result.assets && result.assets[0]?.uri);
      } else {
        console.log('User cancelled image picker');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  

  const createProduct = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      console.log('User ID:', userId);

      const formData = new FormData();
      formData.append('title', title);
      formData.append('supplier', userId.replace(/"/g, ''));
      formData.append('price', price);
      formData.append('description', description);
      formData.append('product_location', product_location);
      formData.append('category', selectedValue);
     
      if (file) {
        // Extract filename from the URI
        const filename = file.uri.split('/').pop();
        console.log('File NAme:', filename);

        // Append the image file separately
        formData.append('image', {
          uri: file.uri,
          type: mime.getType(file.uri),
          name: filename,
        });
      }


      
    

      console.log('Image Info:', file);
      console.log('Form Data:', formData);

      const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/products/${userId.replace(/"/g, '')}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      
      console.log('Response Status:', response.status);
      if (response.ok) {
      
        console.log('Product created successfully:', formData);
        Alert.alert('Wow! Product created successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to create product:', errorData.error);
        Alert.alert('Error', 'Failed to create product. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      Alert.alert('Error', `An unexpected error occurred. Details: ${error.message}`);
    }
  };
     

  return (
    <ScrollView style={{ marginBottom: 15 }}>
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 40, marginBottom: 20 }}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Selling />
        <View style={{ marginTop: 20 }}>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Product name</Text>
            <View style={styles.inputWrapper(COLORS.primary)}>
              <TextInput 
                style={styles.textInput} 
                placeholder="Title" 
                value={title} 
                onChangeText={setTitle} 
              />
            </View>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Price</Text>
            <View style={styles.inputWrapper(COLORS.primary)}>
              <TextInput 
                style={styles.textInput} 
                placeholder="Price" 
                value={price} 
                onChangeText={setPrice} 
                keyboardType="number-pad"
                />
            </View>
          </View>
          <SelectComp style={styles.wrapper}
            label = {'Upload product image'}
            image = {<Ionicons name="image-outline" size={25} color={COLORS.black}/>}
            extraStyle = {{marginBottom: 20}}
            onPress={() =>  pickImage()}

            />
            <View>
              {file && (
                <Image source={{ uri: file.assets[0]?.uri }} style={{ width: 200, height: 200 }} />
              )}
            </View>
          
          <View style={styles.wrapper}>
            <Text style={styles.label}>Product location</Text>
            <View style={styles.inputWrapper(COLORS.primary)}>
              <TextInput
                placeholder="Product Location"
                value={product_location}
                onChangeText={setProductLocation}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Product description</Text>
            <View style={[styles.inputWrapper(COLORS.primary), { height: 100 }]}>
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
                style={{ flex: 1, textAlignVertical: 'top', fontSize: SIZES.large - 3 }}
              />
            </View>
          </View>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            {categories.map((category, index) => (
              <Picker.Item style={styles.pickerItem} key={index} label={category.label} value={category.value} />
            ))}
          </Picker>

          <ButtonSignup
            title="Create Product"
            onPress={createProduct}
            loader={false}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddProduct;


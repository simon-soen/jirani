import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import styles from "./loginPage.style";
import Selling from "../components/product/Selling";
import { COLORS } from '../constants';
import { BackBtn, Button } from "../components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const AddProuct = ({navigation}) => {
   
  const [title, setTitle] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [ product_location, setProductLocation] = useState('');
  const [category, setCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  
  const  selectImage = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync();
      console.log(response);
      if (response.cancelled) {
        return;
      }
      setSelectedImage({ localUri: response.uri });
    } catch (error) {
      console.log(error);
    }
  }
  const uploadImage = async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({
          image: selectedImage,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const createProduct = async () => {
    const SERVER_URL = process.env.SERVER_URL
  
    try {

      const userId = await  AsyncStorage.getItem('id');
      console.log('User ID:', userId);
      
      const response = await fetch(`/api/products/${userId.replace(/"/g, '')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          supplier,
          price,
          imageUrl,
          description,
          product_location, // adjust field name to match your server
          category,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Product created successfully:', data);
        Alert.alert('wow!, Product created successfully');
      } else {
        console.error('Failed to create product:', data.error);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <ScrollView style={{marginBottom: 15}}>
        <SafeAreaView style={{marginHorizontal:20}}>
            <View style={{marginTop: 20, marginBottom: 40}}>
            <BackBtn onPress={() => navigation.goBack()} />
                <Selling />
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
                    </View>
                </View>
                <View>
                  {selectedImage && (
                    <Image source={selectedImage} style={{ width: 200, height: 200 }} />
                  )}
                  <Button title="Select Image" 
                  onPress={selectImage}
                   />
                  <Button title="Upload Image" 
                  onPress={uploadImage} 
                  />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput placeholder="Supplier" value={supplier} onChangeText={setSupplier} />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput placeholder="Price" value={price} onChangeText={setPrice} />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput placeholder="Image URL" value={imageUrl} onChangeText={setImageUrl} />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product description</Text>
                    <View style={[styles.inputWrapper (COLORS.lightWhite), {height: 100}]}>
                        <TextInput 
                        placeholder="Description" 
                        value={description} 
                        onChangeText={setDescription}
                        multiline={true}
                        numberOfLines={4}
                        style={{flex: 1}}
                        />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput
                            placeholder="Product Location"
                            value={ product_location}
                            onChangeText={setProductLocation}
                        />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Product name</Text>
                    <View style={styles.inputWrapper (COLORS.lightWhite)}>
                        <TextInput placeholder="Category" value={category} onChangeText={setCategory} />
                    </View>
                </View>
                <Button 
                    title="Create Product" 
                    onPress={createProduct} 
                    loader ={false}

                    />
            </View>
        </SafeAreaView>
    </ScrollView>
  
  );
};

export default AddProuct;

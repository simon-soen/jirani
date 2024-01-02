import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios'; // Or your preferred HTTP client

const UploadView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const pickImage = async () => {
    // Allow selection from gallery or camera
    let result = await ImagePicker.launchImageLibrary({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('file', {
        uri: selectedImage,
        type: 'image/jpeg', // Adjust according to file type
        name: 'myImage.jpg', // Customize filename if needed
      });

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', response.data);
      // Handle successful upload response (e.g., display success message, store file ID)
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      ) : (
        <TouchableOpacity onPress={pickImage}>
          <Text>Select Image</Text>
        </TouchableOpacity>
      )}

      {uploading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Upload" onPress={handleUpload} disabled={!selectedImage} />
      )}

      {uploadError && <Text style={{ color: 'red' }}>{uploadError}</Text>}
    </View>
  );
};

export default UploadView;

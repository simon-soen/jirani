import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = async (cartItem, quantity) => {
  try {
    // Retrieve the user ID from AsyncStorage
    const userId = await AsyncStorage.getItem('id');

    // Make a POST request to the server's /api/cart/add/:id endpoint
    const response = await fetch(`http://localhost:3000/api/cart/add/${userId.replace(/"/g, '')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItem,
        quantity,
      }),
    });

    // Handle the server response
    if (response.ok) {
      const data = await response.json();
      console.log('Product added to cart:', data);
      // Handle success, update UI, etc.
    } else {
      console.log('Server returned an error with status:', response.status);
      // Handle error, display error message, etc.
    }
  } catch (error) {
    console.error('Error adding product to cart:', error);
    // Handle other types of errors
  }
};

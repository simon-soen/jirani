import AsyncStorage from "@react-native-async-storage/async-storage";

const placeOrder = async (productId, quantity) => {
    try {
        const userId = await AsyncStorage.getItem('id');

      const orderDetails = {
        productId,
        quantity,
        payment_status: "Paid",
      };
  
      const response = await fetch(`/api/orders/place/${userId.replace(/"/g, '')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Order placed successfully:', data);
      } else {
        console.log('Error placing order:', data.error);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  
  export { placeOrder };
  
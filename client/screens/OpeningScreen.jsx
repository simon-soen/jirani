// // OpeningScreen.js
// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { useFonts } from 'expo-font';

// const OpeningScreen = ({ navigation }) => {
//   const [fontsLoaded] = useFonts({
//     // Define your fonts here if needed
//   });

//   useEffect(() => {
//     const checkAndNavigate = async () => {
//       if (fontsLoaded) {
//         // Add any additional setup logic if needed
//         navigation.navigate('Bottom Navigation');
//       }
//     };

//     checkAndNavigate();
//   }, [fontsLoaded, navigation]);

//   return (
//     <View>
//       <Text>Loading Screen or Logo Animation Goes Here</Text>
//     </View>
//   );
// };

// export default OpeningScreen;
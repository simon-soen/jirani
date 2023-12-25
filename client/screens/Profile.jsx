import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, {useState, useEffect}from "react";
import style from "./profile.styles";
import { StatusBar } from "react-native";
import { COLORS } from "../constants";
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ( {navigation}) => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

    useEffect(() => {
      checkExistingUser();
    }, []);

    const checkExistingUser = async () => {
      const id = await AsyncStorage.getItem('id')
      const userId = `user${JSON.parse(id)}`;

      try{
        const currentUser = await AsyncStorage.getItem(userId);
        
        if(currentUser !== null){
          const parsedData = JSON.parse(currentUser)
          setUserData(parsedData);
          setUserLogin(true);
        }else{
          navigation.navigate('Login')
        }
      } catch{
        console.log('Error retrieving data:', error)
      }

    };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`;

    try{
      await AsyncStorage.multiRemove([userId, 'id']);
      navigation.replace('Bottom Navigation')
    }catch{
      console.log('Error logging out the user:', error)
    }
  };

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel", onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Continue", onPress: () => userLogout()
        }
        
      ]
    )
  }

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your device?",
      [
        {
          text: "Cancel", onPress: () => console.log("Cancel clear cache"),
        },
        {
          text: "Continue", onPress: () => console.log("clear cache pressed"),
        }
      ]
    )
  }

  const deleteAccount = () => {
    Alert.alert(
      "delete account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel", onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Continue", onPress: () => console.log("Delete Pressed"),
        },
      ]
    )
  }


  return (
    <View style={style.container}>
          <View style={style.container}>
            <StatusBar backgroundColor={COLORS.gray}/>

            <View style={{width: '100%'}}>
              <Image
                source={require('../assets/images/space.jpg')}
                style={style.cover}
              />
            </View>
            <View style={style.profileContainer}>
              <Image
                  source={require('../assets/images/profile.jpeg')}
                  style={style.pofile}
                />
                <Text style={style.name}>{userData ? userData.username :""}</Text>


                { userLogin === false ?(
                  <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <View style={style.loginBtn}>
                       <Text style={style.menuText}>L O G I N</Text>
                    </View>
                  </TouchableOpacity>
                ): (
                  <View style={style.loginBtn}>
                       <Text style={style.location}>{userData ? userData.email :""}</Text>
                    </View>
                )}

                
            
                { userLogin === false ?(
                  <View></View>
                ): (
                  <View style={style.menuWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorites') }>
                      <View style={style.menuItem(0.2)}>
                        <MaterialCommunityIcons
                          name="heart-outline"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Favorites</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Orders') }>
                      <View style={style.menuItem(0.2)}>
                        <MaterialCommunityIcons
                          name="truck-delivery-outline"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Orders</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart') }>
                      <View style={style.menuItem(0.2)}>
                        <SimpleLineIcons
                          name="bag"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Cart</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => clearCache() }>
                      <View style={style.menuItem(0.2)}>
                        <MaterialCommunityIcons
                          name="cached"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Clear cache</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteAccount() }>
                      <View style={style.menuItem(0.2)}>
                        <AntDesign
                          name="deleteuser"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Delete Account</Text>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => logout() }>
                      <View style={style.menuItem(0.2)}>
                        <AntDesign
                          name="logout"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Text style={style.menuText}>Log Out</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                )}




            </View>
          </View>

    </View>

  )
}

export default Profile;


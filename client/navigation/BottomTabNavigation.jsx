import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, Profile, Shop} from '../screens/index';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/index';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 70,
        backgroundColor: COLORS.lightWhite,
        borderTopColor: COLORS.darkblue,
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>

<Tab.Screen
  name="Home"
  component={Home}
  options={({ route }) => ({
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "home" : "home-outline"}
        size={24}
        color={focused ? COLORS.primary : COLORS.gray}
      />
    ),
    tabBarVisible: route.state ? route.state.index === 0 : true,
  })}
/>
 


        <Tab.Screen
          name="Search" 
          component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return(
                <Ionicons 
                  name={"search-sharp"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                />
              );
            },
          }}
        />  


        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return(
                <Ionicons 
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                />
              );
            },
          }}
        />  

        <Tab.Screen
            name="Shop"
            component={Shop}
            options={{
              tabBarIcon: ({focused}) => {
                return(
                  <Ionicons 
                    name={focused ? "cash" : "cash-outline"}
                    size={24}
                    color={focused ? COLORS.primary : COLORS.gray}
                  />
                );
              },
            }}
        
        
        
        
        />

    </Tab.Navigator>
    
  );
}

export default BottomTabNavigation;
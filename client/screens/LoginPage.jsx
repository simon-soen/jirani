import { ScrollView, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { BackBtn, Button } from "../components";
import styles from "./loginPage.style";
import {Formik} from "formik";  
import * as Yup from "yup";   
import  {MaterialCommunityIcons} from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER_URL } from 'react-native-dotenv';

const validationSchema = Yup.object().shape({

    password: Yup.string()
      .min(8, 'Passwod must be at least 8 characters')
      .required('Required'),
    email: Yup.string()
      .email('Provide a valid email address')
      .required('Required'),
  });



const LoginPage = ({navigation}) => {
    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [obsecureText, setObsequireText] = useState(false);
 

    const inValidForm = () => {
        Alert.alert(
          "Invalid Form",
          "Please provide all required fields",
          [
            {
              text: "Cancel", onPress: () => ({}),
            },
            {
              text: "Continue", onPress: () => ({}),
            },
          ]);
      };

      const login = async (values) => {
        setLoader(true)


        try{
            const endpoint =`${SERVER_URL}/api/login/`
            const data = values;

            const response = await axios.post(endpoint, data);
            if(response.status === 200){
                setLoader(false);
                setResponseData(response.data)

                await AsyncStorage.setItem(`user${response.data._id}`, JSON.stringify(response.data));
                await AsyncStorage.setItem("id", JSON.stringify(response.data._id));
                navigation.replace('Bottom Navigation');
                
            }else{
              Alert.alert(
                "Error logging in", "Please provide valid credentials",[
                {
                    text: "Cancel", onPress: () => ({}),
                },
                {
                    text: "Continue", onPress: () => ({}),
                },
              ]);
            }
        } catch (error){
            Alert.alert( "Error", "oops, Error logging in try again with correct credentials", [
                {
                    text: "Cancel", onPress: () => ({}),
                },
                {
                    text: "Continue", onPress: () => ({}),
                },
                console.log(error)  
              ]);
            } finally{
                setLoader(false);
            }        
      };




    return (
        <ScrollView>
           <SafeAreaView style={{marginHorizontal: 20}}>
                <View style={{marginTop: 20}}>
                    <BackBtn onPress={() => navigation.goBack()} />
                    <Image
                        source={require("../assets/images/bk.png")}
                        style={styles.cover}
                    />

                    <Text style={styles.title}>Unlimited Freedom to Sell & Buy</Text>
                    <Formik
                        initialValues={{email: "", password: ""}}
                        validationSchema={validationSchema}
                        onSubmit={values => login(values)}
                    >

                        {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
                            <View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
                                        <MaterialCommunityIcons
                                            name="email-outline"  
                                            size={24}
                                            color={COLORS.gray}
                                            style={styles.iconStye}

                                        />
 
                                        <TextInput
                                            placeholder="Enter your email"
                                            onFocus={() => {setFieldTouched('email')}}
                                            onBlur={()=> {setFieldTouched('email', "")}}
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{flex:1}}
                                        />
                                    </View>
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorMessage}>{errors.email}</Text>
                                    )}
                                </View>
                                        

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Password</Text>
                                    <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
                                        <MaterialCommunityIcons
                                            name="lock-outline"  
                                            size={24}
                                            color={COLORS.gray}
                                            style={styles.iconStye}

                                        />
 
                                        <TextInput
                                            secureTextEntry={!obsecureText}
                                            placeholder="Password"
                                            onFocus={() => {setFieldTouched('password')}}
                                            onBlur={()=> {setFieldTouched('password', "")}}
                                            value={values.password}
                                            onChangeText={handleChange("password")}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{flex:1}}
                                        />

                                        <TouchableOpacity onPress={() => setObsequireText(!obsecureText)}>                                          
                                            <MaterialCommunityIcons 
                                                name={obsecureText? "eye-outline" : "eye-off-outline"}
                                                size={18}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorMessage}>{errors.password}</Text>
                                    )}
                                </View>
                               <Button 
                                loader={loader}
                                title={"L O G I N"} 
                                onPress={isValid ?handleSubmit: inValidForm} 
                                isValid={isValid}/> 

                               <Text style={styles.registrations} onPress={() => {navigation.navigate("SignUp")}}>Register</Text>
                           </View>
                            )}
                       

                    </Formik>
                 </View>
           </SafeAreaView>
        </ScrollView>
    );

};

export default LoginPage;

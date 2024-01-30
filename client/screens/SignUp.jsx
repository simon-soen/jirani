import {TouchableOpacity, View, Text, SafeAreaView, TextInput, StatusBar, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { BackBtn, ButtonSignup } from "../components";
import styles from "./signUp.styles";
import {Formik} from "formik";  
import * as Yup from "yup";   
import  {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Alert } from "react-native";
import axios from "axios";


const validationSchema = Yup.object().shape({

    password: Yup.string()
      .min(8, 'Passwod must be at least 8 characters')
      .required('Required'),
    email: Yup.string()
        .email('provide a valid email address')
        .required('Required'),
    phoneNo: Yup.string()
        .min(10, 'Provide a valid phone number')
        .required('Required'),    
    location: Yup.string()
        .min(3, 'Provide a valid location')
        .required('Required'),  
    username: Yup.string()
        .min(3, 'Provide a valid username')
        .required('Required'),   
  });

  const SignUp = ({navigation}) => {
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsequireText] = useState(false);
 

    const inValidForm = () => {
        Alert.alert(
          "Invalid Form",
          "Please provide all required fields?",
          [
            {
              text: "Cancel", onPress: () => ({}),
            },
            {
              text: "Continue", onPress: () => ({}),
            },
          ]
        )
    };

  const registerUser = async (values) => {
    setLoader(true);

    try{
        const endpoint ="https://jirani-bebe9d207799.herokuapp.com/api/register";
        const data = values;

        const response = await axios.post(endpoint, data);
        if(response.status === 201){
           navigation.replace('Login')

        }
    }catch(error){
        console.log(error)
    }
  };

  return (
   
        <SafeAreaView >
            <StatusBar barStyle="white-content" backgroundColor={COLORS.primary} />
            <ScrollView>
              
                <Formik
                    initialValues={{email: "", password: "", location: "", username: "", phoneNo: ""}}
                    validationSchema={validationSchema}
                    onSubmit={values => registerUser(values)}
                >

                    {({ 
                        handleChange,
                        handleSubmit, 
                        touched, 
                        values, 
                        errors, 
                        isValid, 
                        setFieldTouched 
                    }) => (
                        <View style={styles.container}>
                            <View style={styles.cover}>
                                <View style={{marginHorizontal:20}}>

                                    <Text style={styles.title} >Sign Up</Text>

                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Username</Text>
                                        <View style={styles.inputWrapper(touched.username ? COLORS.secondary: COLORS.offwhite)}>
                                            <MaterialCommunityIcons
                                                name="face-man-profile"  
                                                size={24}
                                                color={COLORS.gray}
                                                style={styles.iconStye}

                                            />

                                            <TextInput
                                                placeholder="Username"
                                                onFocus={() => {setFieldTouched('username')}}
                                                onBlur={()=> {setFieldTouched('username', "")}}
                                                value={values.username}
                                                onChangeText={handleChange("username")}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1, fontSize: 18}}
                                            />
                                        </View>
                                        {touched.username && errors.username && (
                                            <Text style={styles.errorMessage}>{errors.username}</Text>
                                        )}
                                    </View>


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
                                                style={{flex:1, fontSize: 18}}
                                            />
                                        </View>
                                        {touched.email && errors.email && (
                                            <Text style={styles.errorMessage}>{errors.email}</Text>
                                        )}
                                    </View>

                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Phone No</Text>
                                        <View style={styles.inputWrapper(touched.phoneNo ? COLORS.secondary: COLORS.offwhite)}>
                                            <MaterialCommunityIcons
                                                name="phone-outline"  
                                                size={24}
                                                color={COLORS.gray}
                                                style={styles.iconStye}

                                            />

                                            <TextInput
                                                placeholder="Enter your phone No..."
                                                onFocus={() => {setFieldTouched('phoneNo')}}
                                                onBlur={()=> {setFieldTouched('phoneNo', "")}}
                                                value={values.phoneNo}
                                                onChangeText={handleChange("phoneNo")}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1, fontSize: 18}}
                                            />
                                        </View>
                                        {touched.phoneNo && errors.phoneNo && (
                                            <Text style={styles.errorMessage}>{errors.phoneNo}</Text>
                                        )}
                                    </View>
                            

                        
                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Location</Text>
                                        <View style={styles.inputWrapper(touched.location ? COLORS.secondary: COLORS.offwhite)}>
                                            <Ionicons
                                                name="location-outline"  
                                                size={24}
                                                color={COLORS.gray}
                                                style={styles.iconStye}

                                            />

                                            <TextInput
                                                placeholder="Enter your location"
                                                onFocus={() => {setFieldTouched('location')}}
                                                onBlur={()=> {setFieldTouched('location', "")}}
                                                value={values.location}
                                                onChangeText={handleChange("location")}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1, fontSize: 18}}
                                            />
                                        </View>
                                        {touched.location && errors.location && (
                                            <Text style={styles.errorMessage}>{errors.location}</Text>
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
                                                secureTextEntry={obsecureText}
                                                placeholder="Password"
                                                onFocus={() => {setFieldTouched('password')}}
                                                onBlur={()=> {setFieldTouched('password', "")}}
                                                value={values.password}
                                                onChangeText={handleChange("password")}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1, fontSize: 18}}
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
                                </View>
                            </View>
                            <View style={styles.bottom}>
                                <ButtonSignup 
                                    title={"S I G N U P"} 
                                    onPress={isValid ?handleSubmit: inValidForm} 
                                    loader={loader}
                                    isValid={isValid}
                                    style={{backgroundColor:COLORS.primary, }}
                                /> 
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    
  )
}

export default SignUp;
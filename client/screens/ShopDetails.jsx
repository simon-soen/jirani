import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import styles from "./shopDetails.styles";
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { StatusBar } from "react-native";

const ShopDetails = ({navigation}) => {
    // StatusBar.setBarStyle('light-content');
return(
    <SafeAreaView>
        {/* <StatusBar  /> */}
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    flexDirection:"row", 
                    justifyContent:"space-between", 
                    marginHorizontal: 20,
                    }}>
                    <View>
                        <Text style={styles.totalSales}>Kshs 20, 000</Text>
                        <Text style={styles.totalSalesLabel}>Total Sales</Text>
                    </View>
                    <Ionicons name="notifications" size={24} color="white" />
                </View>
                
                <View style={styles.shopping}>
                <TouchableOpacity onPress={() => navigation.navigate('ShopProducts') }>
                        <View style={styles.ShopItem}>
                            <View style={[styles.iconContainer,]}>
                                <MaterialCommunityIcons
                                    name="store-outline"
                                    size={34}
                                    color={COLORS.primary}
                                    style={{alignContent:'center', alignSelf:'center', marginTop:10}}

                                />
                            </View>
                            <Text style={[styles.shopText, {marginLeft:1}]}>products</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SupplierOrders') }>
                        <View style={styles.ShopItem}>
                            <View style={[styles.iconContainer]}>
                                <MaterialCommunityIcons
                                    name="shopping-outline"
                                    size={34}
                                    color={COLORS.primary}
                                    style={{alignContent:'center', alignSelf:'center', marginTop:10}}

                                />
                            </View>
                            <Text style={[styles.shopText, {marginLeft:1}]}>Orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders') }>
                        <View style={styles.ShopItem}>
                            <View style={[styles.iconContainer, ]}>
                                <MaterialCommunityIcons
                                    name="truck-delivery-outline"
                                    size={34}
                                    color={COLORS.primary}
                                    style={{alignContent:'center', alignSelf:'center', marginTop:10}}

                                />
                            </View>
                            <Text style={[styles.shopText, {marginLeft:-7}]}>On-transit</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate("AddProduct") }>
                        <View style={styles.ShopItem}>
                            <View style={[styles.iconContainer]}>
                                <SimpleLineIcons
                                    name="plus"
                                    size={34}
                                    color={COLORS.primary}
                                    style={{alignContent:'center', alignSelf:'center', marginTop:10}}
                                />
                            </View>
                            <Text style={[styles.shopText, {marginLeft:-10}]}>Add Product</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>

                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.topSellerContainer}>
                            <Text style={styles.bodyTitle}>Top Selling Items</Text>
                            <View style={styles.topSellersWrapper}>
                                
                            </View>
                        </View>

                        <View style={styles.topSellerContainer}>
                            <Text style={styles.bodyTitle}>Reviews</Text>
                            <View style={styles.topSellersWrapper}>
                                
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        </View>
    </SafeAreaView>
)
}
export default ShopDetails;
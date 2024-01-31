// ProductsScreen.js
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CategoryList from "../components/home/CategoryList";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import styles from "./NewRivals.style";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {categories} from "../components/home/categories";

const CategoryScreen = () => {
  const route = useRoute();
  const { category } = route.params;
  const navigation = useNavigation();

  const categoryLabel = categories.find((cat) => cat.value === category)?.label || category;
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite} />
          </TouchableOpacity>
          <Text style={styles.heading}>{categoryLabel}</Text>
        </View>
        <CategoryList category={category} />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

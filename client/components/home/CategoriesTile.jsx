import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { categories } from "./categories";
import { COLORS, SIZES } from "../../constants";

const CategoriesTile = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryScreen", { category });
    toggleMenuVisibility();
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenuVisibility}>
          <MaterialCommunityIcons
            name={isMenuVisible ? "menu" : "menu"}
            size={isMenuVisible ? 43 : 43}
            color={COLORS.primary}
            style={{ transform: [{ rotate: isMenuVisible ? '90deg' : '0deg' }] }}
          />
        </TouchableOpacity>
      </View>

      {isMenuVisible && (
        <View style={styles.menu}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleCategoryPress(item.value)}
              >
                <Text style={styles.menuItemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  menuButtonContainer: {
    flexDirection: "row", 
  },

  menuButton: {
    marginVertical:SIZES.medium,
    marginHorizontal: SIZES.xSmall,
  },

  menu: {
    position: "absolute",
    marginVertical:SIZES.xxLarge*1.85,
    marginHorizontal: SIZES.medium-3,
    backgroundColor: COLORS.white,
    zIndex: 1,
    elevation: 5,
    width:200 
  },

  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },

  menuItemText: {
    color: COLORS.primary,
  },
});

export default CategoriesTile;
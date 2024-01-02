import { useNavigation } from '@react-navigation/native';
import React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { categories } from "./categories";
import { COLORS, SIZES } from "../../constants";
import { useState } from "react";

const CategoriesTile = ({}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const navigation = useNavigation();


  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryScreen", { category });
  };

  const toggleCategoriesVisibility = () => {
    // Toggle the visibility of all categories
    setShowAllCategories((prev) => !prev);
  };

  const calculateNumColumns = () => {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = 80; // Adjust this based on your design
    return Math.floor(screenWidth / itemWidth);
  };

  const calculateVisibleCategories = () => {
    return showAllCategories ? categories : categories.slice(0, calculateNumColumns());
  };

  const hiddenCategories = () => {
    const categoriesPerRow = calculateNumColumns();
    return showAllCategories ? [] : categories.slice(calculateVisibleCategories().length, categories.length);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <FlatList
            data={calculateVisibleCategories()}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item._id}
                style={[
                  styles.categoryButton,
                  { backgroundColor: selectedCategory === item._id ? COLORS.primary : COLORS.secondary },
                ]}
                onPress={() => handleCategoryPress(item.value)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: selectedCategory === item._id ? COLORS.offwhite : COLORS.primary },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            numColumns={calculateNumColumns()}
          />

          {hiddenCategories().length > 0 && showAllCategories && (
            <FlatList
              data={hiddenCategories()}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    styles.categoryButton,
                    { backgroundColor: selectedCategory === item.value ? COLORS.primary : COLORS.secondary },
                  ]}
                  onPress={() => handleCategoryPress(item.value)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      { color: selectedCategory === item.value ? COLORS.offwhite : COLORS.primary },
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              numColumns={calculateNumColumns()}
            />
          )}
        </View>

      

      {categories.length > 2 && (
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCategoriesVisibility}>
          <MaterialCommunityIcons
            name={showAllCategories ? 'chevron-up-circle' : 'chevron-down-circle'}
            size={24}
            style={styles.arrowIcon}
          />        
          </TouchableOpacity>
      )}
       
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  categoryButton: {
    marginRight: 6,
    marginBottom: 6,
    padding: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray2,
  },

  categoryText: {},

  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowIcon: {
    color: COLORS.primary,
  },
});

export default CategoriesTile;
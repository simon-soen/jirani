import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { Ionicons } from "@expo/vector-icons"; 

export default function SelectComp({ extraStyle, image, label, onPress, value }) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[
          {
            borderColor: COLORS.primary,
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 5,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          extraStyle,
        ]}
      >
        <Text style={{ fontSize: 16 }}>{label}</Text>

        {image || <Ionicons name="image-outline" size={25} color={COLORS.black} />}

      
      </View>
    </TouchableOpacity>
  );
}
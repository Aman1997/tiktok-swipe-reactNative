import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileStats({ name, stat, color,onPress }) {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={name} size={35} color={color} onPress={onPress}/>
      <Text style={styles.stats}>{stat}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
  },
  stats: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

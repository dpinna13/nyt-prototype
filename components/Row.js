/**
 * Row.js item Component
 * 
 * This component represents a row item typically used in lists to display content such as recipes or movies.
 * It displays an image, title, subtitle, and a right arrow icon to indicate navigation to a detailed view.
 * The component dynamically adjusts its styling based on the user's color scheme (light or dark mode).
 * 
 * Props:
 * - image (string): URL of the image to be displayed on the left side of the row (falls back to a placeholder if no image is provided).
 * - title (string): The main title text, displayed prominently in the row.
 * - subtitle (string): A smaller, secondary description text displayed below the title.
 * - onPress (function): A function that is triggered when the user taps on the row, typically used to navigate to a detailed view.
 * 
 * Usage:
 * - This component is used in scrollable lists or as individual row items on a screen, allowing for easy navigation through content.
 * - Example usage in a screen/component:
 *   <Row
 *     image={item.image}
 *     title={item.title}
 *     subtitle={item.subtitle}
 *     onPress={() => handlePress(item)}
 *   />
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // Import router
import { Colors } from '@/constants/Colors'; // Import the Colors.ts

const Row = ({ image, title, subtitle, onPress }) => {
  const router = useRouter(); 
  const colorScheme = useColorScheme(); 
  const colors = Colors[colorScheme]; 

  return (
    <TouchableOpacity 
      onPress={onPress}  
      style={[
        styles.rowContainer, { 
        backgroundColor: colors.background, 
        borderBottomColor: colors.borderColor 
    }]}
    >
      {/* Squared Image, or placeholder */}
      <Image
        source={{ uri: image || 'https://via.placeholder.com/96' }} 
        style={styles.rowImage}
      />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
      </View>

      {/* Right Arrow */}
      <Ionicons name="chevron-forward" size={24} color={colors.icon} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 16, 
    borderBottomWidth: 1, 
    borderRadius: 4,
  },
  rowImage: {
    width: 96,
    height: 96,
    borderRadius: 4,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  arrowIcon: {
    paddingLeft: 8,
    paddingTop: 16,
  },
});

export default Row;
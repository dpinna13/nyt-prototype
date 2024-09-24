/**
 * Featured.js Component
 * 
 * This component is designed to display a featured card element, typically used to showcase items like recipes or movies.
 * It includes an image, title, author, rating, and length, all of which can be customized based on the content passed via props.
 * The component also supports light and dark themes, dynamically applying styles based on the current color scheme.
 * 
 * Props:
 * - image (string): URL of the image to display in the card.
 * - title (string): The main title for the featured item (e.g., recipe or movie name).
 * - author (string): The creator, author, or director of the featured item.
 * - rating (string): A rating value displayed as text (e.g., "★4.5").
 * - length (string): A string that displays the duration of the content (e.g., "120 min").
 * - onPress (function): A function that is triggered when the user taps on the card.
 * 
 * Usage:
 * - This component is typically used in horizontal or vertical scrollable lists to present featured content.
 * - Example usage in a screen/component:
 *   <Featured 
 *     image={item.image}
 *     title={item.title}
 *     author={item.author}
 *     rating={item.rating}
 *     length={`${item.length} min`}
 *     onPress={handlePress}
 *   />
 */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';  

const defaultImage = 'https://via.placeholder.com/145';  // Fallback image
const { width } = Dimensions.get('window');

const Featured = ({ image, title, author, rating, length, onPress }) => {
  const colorScheme = useColorScheme();  
  const colors = Colors[colorScheme];  

  const imageSource = image ? { uri: image } : { uri: defaultImage };

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.featured, 
        { 
          backgroundColor: colors.cardBackground, 
          borderColor: colors.borderColor,  
          shadowColor: colorScheme === 'dark' ? '#000' : '#ccc',  
        }
      ]}
      accessibilityLabel={`Featured item: ${title} by ${author}. Rating: ${rating}. Length: ${length}`}
      activeOpacity={0.8}  
    >
      <Image source={imageSource} style={styles.featuredImage} />
      <View style={styles.featuredContent}>
        <Text style={[styles.featuredTitle, { color: colors.text }]} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <Text style={[styles.featuredAuthor, { color: colors.textSecondary }]} numberOfLines={1} ellipsizeMode="tail">{author}</Text>
        <Text style={[styles.featuredRating, { color: colors.textSecondary }]}>★ {rating}/5</Text>
        <Text style={[styles.featuredLength, { color: colors.textSecondary }]}>About {length} min</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  featured: {
    marginBottom: 16,
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 4,  
    borderWidth: 1,
    width: width * 0.4,  
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,  
    shadowRadius: 5,
    minHeight: 210,  
  },
  featuredImage: {
    width: '100%',
    height: 120,  
    resizeMode: 'cover',
  },
  featuredContent: {
    padding: 8,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredAuthor: {
    fontSize: 14,
    marginBottom: 6,
  },
  featuredRating: {
    fontSize: 12,
    marginBottom: 4,
  },
  featuredLength: {
    fontSize: 12,
  },
});

export default Featured;
/**
 * Card.js Component
 * 
 * This component renders a card with an image background, overlay, and text content.
 * It is designed to display content such as a recipe or movie preview, including title, type, author, 
 * description, and an image. It supports both light and dark themes by using dynamic styles based on 
 * the current color scheme.
 * 
 * Props:
 * - image (string): URL of the image to display in the background.
 * - type (string): The category/type of the card (e.g., "Main Course", "Movie").
 * - title (string): The main title of the card (e.g., recipe or movie name).
 * - author (string): The author or creator of the content.
 * - description (string): A short description of the content (truncated if too long).
 * - onPress (function): Function to handle when the card is pressed.
 * 
 * Usage:
 * - This component is typically used within a list or grid layout to preview items such as recipes,
 *   movies, or any other content that requires a visually appealing card format.
 * - Example usage in a screen/component: 
 *   <Card image={recipe.image} title={recipe.title} author={recipe.author} description={recipe.description} onPress={handlePress} />
 */

import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'; 

const Card = ({ image, type, title, author, description, onPress }) => {
  const colorScheme = useColorScheme(); 
  const colors = Colors[colorScheme]; 

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor: colors.cardBackground }]}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.cardImage}
        imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        defaultSource={require('@/assets/images/defaultImage.png')}
      >
        <View style={[
          styles.overlay, { backgroundColor: colorScheme === 'dark' ? 'rgba(36, 36, 36, 0.2)' : 'rgba(250, 250, 250, 0.2)' }]} 
        />
      </ImageBackground>
      
      <View style={[styles.cardContent, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.cardType, { color: colors.textSecondary }]}>{type}</Text>
        <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.cardAuthor, { color: colors.textSecondary }]}>{author}</Text>
        <Text style={[styles.cardDescription, { color: colors.text }]} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  cardImage: {
    width: '100%',
    height: 350,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    position: 'absolute',
    padding: 16,
    height: 180,
    width: '100%',
    top: 170,
    paddingBottom: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardType: {
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardAuthor: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default Card;
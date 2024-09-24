/**
 * Recipes View
 * 
 * Purpose:
 * - Displays a list of recipes for users to browse through.
 * - The component features a parallax scrolling effect with a custom header image.
 * - Each recipe is displayed as a row item using the `Row` component, showcasing the recipe's image, title, and a truncated description.
 * 
 * Features:
 * - A dynamic header with an image representing a kitchen scene.
 * - A list of recipes loaded from a local JSON file and displayed in a scrollable view.
 * - Tapping on a recipe navigates to the detailed recipe view, where users can explore the full details.
 * 
 * Usage:
 * - This screen serves as a way for users to explore different recipes.
 * - It is commonly used as a starting point for accessing detailed recipe information.
 * 
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, View, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useDynamicStyles from '@/constants/Styles'; 
import { Colors } from '@/constants/Colors'; 
import { useColorScheme } from '@/hooks/useColorScheme'; 
import Row from '@/components/Row';  
import { navigateToRecipeDetails } from '@/utils/navigationUtils';  

const recipesData = require('@/data/recipes.json');

export default function RecipeScreen() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter(); 
  const colorScheme = useColorScheme(); 
  const colors = Colors[colorScheme]; 
  const globalStyles = useDynamicStyles(); 

  useEffect(() => {
    setRecipes(recipesData);  
  }, []);

  const truncateDescription = (description) => {
    return description.length > 115 ? description.slice(0, 115) + '...' : description;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors.headerBackgroundColor} 
      headerImage={
        <Image
          source={{ uri: "https://diegopinna.com/nyt-prototype/kitchen.png" }} 
          style={{ width: '100%', height: 250 }}  
          resizeMode="cover" 
        />
      }
    >
      <View style={globalStyles.container}>
        <ThemedView style={globalStyles.titleContainer}>
          <ThemedText type="title" style={globalStyles.title}>Recipes</ThemedText>
        </ThemedView>

        <ScrollView contentContainerStyle={{ padding: 0, margin: 0 }}>
          {recipes.map((recipe) => (
            <Row
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              subtitle={truncateDescription(recipe.description)}  
              onPress={() => navigateToRecipeDetails(router, recipe)} 
            />
          ))}      
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}
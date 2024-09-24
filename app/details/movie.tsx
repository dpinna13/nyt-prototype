
/**
 * MovieDetailScreen View
 * 
 * Purpose:
 * - Displays detailed information about a selected movie.
 * - The view includes the movie's title, description, author (director), length, rating, and additional details like related recipes.
 * - Implements a parallax scrolling effect with a featured image at the top.
 * 
 * Features:
 * - Dynamic header image of the movie or a placeholder if none is available.
 * - Details such as the movie's rating, length, and director, as well as an article explaining why the movie is liked.
 * - A section with related recipes that the user can explore by tapping on them, navigating to their detailed view.
 * 
 * Usage:
 * - This screen is used to present a comprehensive view of a selected movie, providing users with its main details and related content.
 * - It is accessed when a user taps on a specific movie from a list or another view.
 * 
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import Featured from '@/components/Featured';
import useDynamicStyles from '@/constants/Styles';

const recipesData = require('@/data/recipes.json');

export default function MovieDetailScreen() {
  const { title, description, author, length, rating, image, article, recipes } = useLocalSearchParams();
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const navigation = useNavigation();
  const router = useRouter();
  const styles = useDynamicStyles();
  const dynamicPlaceholderImage = 'https://via.placeholder.com/400x200?text=' + title;

  useEffect(() => {
    if (title) {
      navigation.setOptions({
        title,
        headerBackTitle: 'Back',
      });
    }
  }, [title]);

  useEffect(() => {
    if (recipes) {
      const relatedRecipeIds = JSON.parse(recipes);
      const fetchedRecipes = recipesData.filter((recipe) => relatedRecipeIds.includes(recipe.id));
      setRelatedRecipes(fetchedRecipes);
    }
  }, [recipes]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={styles.contentContainer.backgroundColor}
      headerImage={
          <View style={styles.headerContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
      }
    >
      {/* Title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>{title}</ThemedText>
      </ThemedView>

      {/* Main details box */}
      <ThemedView style={styles.descriptionContainer}>
        <View style={styles.infoRow}>
          <ThemedText style={styles.infoText}>{author}</ThemedText>
          <ThemedText style={styles.infoText}>★{rating}/5</ThemedText>
          <ThemedText style={styles.infoText}>About {length} min</ThemedText>
        </View>
        <ThemedText style={styles.description}>{description}</ThemedText>
      </ThemedView>

      {/* Article Section */}
      {article && (
        <ThemedView style={styles.articleContainer}>
          <Text style={styles.articleTitle}>Why we like it:</Text>
          <Text style={styles.articleText}>{article}</Text>
        </ThemedView>
      )}

      {/* Related Recipes Section */}
      {relatedRecipes.length > 0 && (
        <View style={styles.relatedContainer}>
          <Text style={styles.relatedTitle}>Related Recipes:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {relatedRecipes.map((recipe, index) => (
              <View key={index} style={styles.relatedWrapper}>
                <Featured
                  image={recipe.image}
                  title={recipe.title}
                  author={recipe.author}
                  rating={recipe.rating?.toString()}
                  length={recipe.length}
                  onPress={() => router.push({
                    pathname: '/details/recipe',
                    params: {
                      title: recipe.title,
                      description: recipe.description,
                      author: recipe.author,
                      rating: recipe.rating,
                      length: recipe.length,
                      image: recipe.image,
                      article: recipe.article,
                      id: recipe.id,
                      movies: JSON.stringify(recipe.movies),
                    }
                  })}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </ParallaxScrollView>
  );
}

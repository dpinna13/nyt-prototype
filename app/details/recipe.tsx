/**
 * RecipeDetailScreen View
 * 
 * Purpose:
 * - Displays detailed information about a specific recipe.
 * - The view includes the recipe's title, description, author (chef), length (prep time), rating, and an optional article with additional details.
 * - Implements a parallax scrolling effect with a featured image at the top.
 * 
 * Features:
 * - Dynamic header image for the recipe or a placeholder if no image is provided.
 * - Recipe details such as the chef, preparation time, and rating, along with an article section explaining the recipe's highlights.
 * - A section showing related movies that are connected to the recipe, allowing users to navigate to those movie details.
 * 
 * Usage:
 * - This screen is used to provide users with in-depth information about a recipe, as well as related content (movies).
 * - It is accessed when a user selects a specific recipe from a list or another view, such as from a movie detail screen or a featured recipes section.
 * 
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

const moviesData = require('@/data/movies.json');

export default function RecipeDetailScreen() {
  const { title, description, author, length, rating, image, article, movies } = useLocalSearchParams();  
  const [relatedMovies, setRelatedMovies] = useState([]);
  const navigation = useNavigation();  
  const router = useRouter();  
  const styles = useDynamicStyles();
  const dynamicPlaceholderImage = 'https://via.placeholder.com/375x250?text=' + title;

  useEffect(() => {
    if (title) {
      navigation.setOptions({
        title,
        headerBackTitle: 'Back', 
      });
    }
  }, [title]);

  useEffect(() => {
    if (movies) {
      const relatedMovieIds = JSON.parse(movies);
      const fetchedMovies = moviesData.filter((movie) => relatedMovieIds.includes(movie.id));
      setRelatedMovies(fetchedMovies);
    }
  }, [movies]);

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
          <ThemedText style={styles.description}>{author}</ThemedText>
          <ThemedText style={styles.description}>★{rating}/5</ThemedText>
          <ThemedText style={styles.description}>About {length} min</ThemedText>
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

      {/* Related Movies Section */}
      {relatedMovies.length > 0 && (
        <View style={styles.relatedContainer}>
          <Text style={styles.relatedTitle}>Related Movies:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {relatedMovies.map((movie, index) => (
              <View key={index} style={styles.relatedWrapper}>
                <Featured
                  image={movie.image}
                  title={movie.title}
                  author={movie.author}
                  rating={movie.type}
                  length={movie.length}
                  onPress={() => router.push({
                    pathname: '/details/movie',
                    params: {
                      title: movie.title,
                      description: movie.description,
                      image: movie.image,
                      article: movie.article,
                      id: movie.id,
                      rating: movie.rating,
                      length: movie.length,
                      author: movie.author,
                      recipes: JSON.stringify(movie.recipes),
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
/**
 * RoundupDetailScreen View
 * 
 * Purpose:
 * - This view displays detailed information about a specific roundup item, such as a collection of recipes or movies.
 * - The component dynamically loads the relevant roundup data based on the `id` passed in the route parameters.
 * - It uses the `ParallaxScrollView` to provide a smooth scrolling experience with a parallax effect for the header image.
 * 
 * Features:
 * - Displays a header image for the roundup with a loading indicator until the image is fully loaded.
 * - Shows the title, description, and full article content for the selected roundup item.
 * - Displays related recipes and related movies in horizontally scrollable sections.
 * - Each recipe and movie is displayed using the `Featured` component, and tapping on them navigates to detailed views.
 * 
 * Usage:
 * - This screen is accessed when a user selects a specific roundup item from the home or another screen.
 * - Users can view detailed information about the roundup and explore related recipes or movies.
 * 
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import Featured from '@/components/Featured';
import useDynamicStyles from '@/constants/Styles'; 
import { navigateToMovieDetails, navigateToRecipeDetails } from '@/utils/navigationUtils';

const roundupsData = require('@/data/roundups.json');

export default function RoundupDetailScreen() {
  const { id } = useLocalSearchParams(); 
  const [roundup, setRoundup] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const navigation = useNavigation(); 
  const router = useRouter(); 
  const styles = useDynamicStyles(); 

  useEffect(() => {
    const foundRoundup = roundupsData.find(item => item.id === Number(id));
    if (foundRoundup) {
      setRoundup(foundRoundup);
      navigation.setOptions({
        title: foundRoundup.title,
        headerBackTitle: 'Back',
      });
    }
  }, [id]);

  if (!roundup) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={styles.contentContainer.backgroundColor}
      headerImage={
        <>
          {imageLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" />
            </View>
          )}
          <Image
            source={{ uri: roundup.image }}
            style={styles.image}
            onLoadEnd={() => setImageLoading(false)}
          />
        </>
      }
    >
      <View style={styles.contentContainer}>
        {/* Title */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>{roundup.title}</ThemedText>
        </ThemedView>

        {/* Description */}
        <Text style={styles.description}>{roundup.description}</Text>

        {/* Article */}
        <Text style={styles.articleText}>{roundup.article}</Text>

        {/* Related Recipes Section */}
        {roundup.recipes && roundup.recipes.length > 0 && (
          <View style={styles.relatedContainer}>
            <Text style={styles.relatedTitle}>Related Recipes:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {roundup.recipes.map((recipe, index) => (
                <View key={index} style={styles.relatedWrapper}>
                  <Featured
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    author={recipe.author}
                    rating={recipe.rating}
                    length={recipe.length}
                    onPress={() => navigateToRecipeDetails(router, recipe)}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Related Movies Section */}
        {roundup.movies && roundup.movies.length > 0 && (
          <View style={styles.relatedContainer}>
            <Text style={styles.relatedTitle}>Related Movies:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {roundup.movies.map((movie, index) => (
                <View key={index} style={styles.relatedWrapper}>
                  <Featured
                    image={movie.image}
                    title={movie.title}
                    author={movie.author}
                    rating={movie.rating}
                    length={movie.length}
                    onPress={() => navigateToMovieDetails(router, movie)}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </ParallaxScrollView>
  );
}
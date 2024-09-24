/**
 * Movies View
 * 
 * Purpose:
 * - Displays a list of movies in a scrollable view.
 * - The view includes a header image and a title ("Movies") at the top.
 * - Each movie is represented in a row, showing an image, title, and truncated description.
 * 
 * Features:
 * - Implements a parallax scrolling effect with a featured header image at the top.
 * - Dynamically loads and displays a list of movies from local JSON data.
 * - Each movie row includes an image, title, and a description that is truncated to maintain consistent formatting.
 * - Provides navigation to detailed movie screens when a user selects a specific movie.
 * 
 * Usage:
 * - This screen is used to display a list of movies for users to browse.
 * - Users can tap on any movie to navigate to its detailed view for further information.
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
import { navigateToMovieDetails } from '@/utils/navigationUtils';  

const moviesData = require('@/data/movies.json');

export default function MovieScreen() {
  const [movies, setMovies] = useState([]);
  const router = useRouter(); 
  const colorScheme = useColorScheme(); 
  const colors = Colors[colorScheme]; 
  const globalStyles = useDynamicStyles(); 


  useEffect(() => {
    setMovies(moviesData);  
  }, []);

  const truncateDescription = (description) => {
    return description.length > 115 ? description.slice(0, 115) + '...' : description;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors.headerBackgroundColor} 
      headerImage={
        <Image
          source={{ uri: "https://diegopinna.com/nyt-prototype/cinema.png" }} 
          style={{ width: '100%', height: 250 }}  
          resizeMode="cover" 
        />
      }
    >
      <View style={globalStyles.container}>
        <ThemedView style={globalStyles.titleContainer}>
          <ThemedText type="title" style={globalStyles.title}>Movies</ThemedText>
        </ThemedView>

        <ScrollView contentContainerStyle={{ padding: 0, margin: 0 }}>

          {movies.map((movie) => (
            <Row
              key={movie.id}
              image={movie.image}
              title={movie.title}
              subtitle={truncateDescription(movie.description)}  
              onPress={() => navigateToMovieDetails(router, movie)} 
            />
          ))}      
        </ScrollView>
      </View>
    </ParallaxScrollView>  
  );
}
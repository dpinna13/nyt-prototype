/**
 * HomeScreen view
 * 
 * Purpose:
 * - This view represents the main homepage screen of the app. It dynamically loads a list of "roundups" from a JSON file (`roundups.json`).
 * - The roundups data includes various items such as recipes, movies, or themed collections. Each item is displayed using the `Card` component.
 * - The `Card` component displays the image, title, type, author, and a brief description of each item.
 * - Users can scroll through the list of roundups and tap on a card to navigate to a detailed view of the selected item.
 * - The navigation is handled by passing the selected item's `id` as a parameter to the `/details/roundup` route.
 * 
 * Usage:
 * - This view is used as the main entry point or homepage of the app, where users can browse available content collections (roundups).
 * 
 */

import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '@/components/Card';  

const jsonData = require('@/data/roundups.json');

export default function HomeScreen() {
  const router = useRouter();  
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            type={item.type}
            title={item.title}
            author={item.author}
            description={item.description}
            article={item.article}
            onPress={() =>
              router.push({
                pathname: '/details/roundup', 
                params: { 
                  id: item.id
                },  
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
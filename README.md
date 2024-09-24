# NYT Prototype

A React Native project was created using Expo, which showcases recipes and movies with detailed views, leveraging components like parallax scroll views, dynamic themes, and featured cards.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Figma Designs](#figma-designs)
- [Installation](#installation)
- [Screens](#screens)
- [Project Structure](#project-structure)

  
## Project Overview

The NYT Prototype is a mobile app designed to present curated lists of recipes and movies, each with detailed descriptions and related items. It uses a modern design approach, including parallax scroll views and dynamic themes that switch based on the device’s color scheme.
It took about two and a half days to create the whole project from start to finish.

This project uses:
- **React Native** with **Expo** for cross-platform development.
- Custom components like `ParallaxScrollView,` `Row,` and `Featured.`
- Dynamic theming with light and dark modes via a custom `Colors` configuration.

## Features

- Parallax scroll views for engaging, dynamic content.
- Themed components support both light and dark modes.
- Featured card components for recipes and movies.
- Dynamic routing and navigation between screens with Expo Router.
- Smooth animations and transitions between screens.

## Figma Designs

Initial design explorations are collected in Figma, with the feature and content map and list of requirements. Additionally, there are two sample flows that users would be able to complete using the prototype. Finally, the initial lo-fi screenshots of the prototype are included at the end of day one.
[Figma designs](https://www.figma.com/design/oli7pCOBOBdILlVaAXItZF/NYT-prototype?node-id=0-1)

## Demo

A demo of the latest version of the prototype is available [here](https://diegopinna.com/nyt-prototype/Simulator%20Screen%20Recording%20-%20iPhone%20SE%20%283rd%20generation%29%20-%202024-09-24%20at%2011.10.08.mp4)

## Installation

To set up and run this project locally:

Clone the repository:
   ```
   git clone git@github.com:dpinna13/nyt-prototype.git
   ```
Navigate to the project directory:

```
cd nyt-prototype
```
Install dependencies and run 

```
npx expo start
```

Once the app is running, you can navigate through the home screen to see lists of recipes and movies. Each item is clickable, leading to a detailed page with more information and related content.

## Screens

Home Screen:
Displays a list of either recipes or movies (depending on the selected tab), each represented by cards.
On tapping a card, you are directed to the detail screen for that item.
Recipe Detail Screen:
Shows a parallax view of the selected recipe with detailed information, related movies, and an article section.
Movie Detail Screen:
Similar to the Recipe detail screen, it displays movie-specific content with related recipes.

## Project Structure

```
.
├── assets                # Contains images and other static assets
├── components            # Reusable components like Featured, Row, ParallaxScrollView
├── constants             # Constants like colors, styles
├── data                  # JSON files with recipe and movie data
├── hooks                 # Custom hooks (e.g., useColorScheme)
├── screens               # Main screens like HomeScreen, MovieDetailScreen, RecipeDetailScreen
├── utils                 # Utility functions for navigation and other logic
├── app/(tabs)/index.tsx  # Entry point of the app
├── README.md             # This file
└── package.json          # Project dependencies and scripts

```

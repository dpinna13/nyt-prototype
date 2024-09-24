# NYT Prototype

A React Native project created using Expo that showcases recipes and movies with detailed views, leveraging components like parallax scroll views, dynamic themes, and featured cards.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screens](#screens)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The NYT Prototype is a mobile app designed to present curated lists of recipes and movies, each with detailed descriptions and related items. It uses a modern design approach, including parallax scroll views and dynamic themes that switch based on the device’s color scheme.

This project uses:
- **React Native** with **Expo** for cross-platform development.
- Custom components like `ParallaxScrollView`, `Row`, and `Featured`.
- Dynamic theming with light and dark modes via a custom `Colors` configuration.

## Features

- Parallax scroll views for engaging, dynamic content.
- Themed components with support for both light and dark mode.
- Featured card components for recipes and movies.
- Dynamic routing and navigation between screens with Expo Router.
- Smooth animations and transitions between screens.

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

Once the app is running, you can navigate through the home screen to see lists of recipes and movies. Each item is clickable, leading to a detail page with more information, and related content.

Screens

Home Screen:
Displays a list of either recipes or movies (depending on the selected tab), each represented by cards.
On tapping a card, you are directed to the detail screen for that item.
Recipe Detail Screen:
Shows a parallax view of the selected recipe with detailed information, related movies, and an article section.
Movie Detail Screen:
Similar to the Recipe detail screen but displays movie-specific content with related recipes.

Project Structure

```
.
├── assets              # Contains images and other static assets
├── components          # Reusable components like Featured, Row, ParallaxScrollView
├── constants           # Constants like colors, styles
├── data                # JSON files with recipe and movie data
├── hooks               # Custom hooks (e.g., useColorScheme)
├── screens             # Main screens like HomeScreen, MovieDetailScreen, RecipeDetailScreen
├── utils               # Utility functions for navigation and other logic
├── App.js              # Entry point of the app
├── README.md           # This file
└── package.json        # Project dependencies and scripts

```

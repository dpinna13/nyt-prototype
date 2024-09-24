/**
 * Navigate to the movie detail screen with the provided movie data
 * @param {Object} router - The router object for navigation
 * @param {Object} movie - The movie object containing its details
 */
export function navigateToMovieDetails(router, movie) {
    router.push({
      pathname: '/details/movie',
      params: {
        title: movie.title,
        description: movie.description,
        author: movie.author,
        length: movie.length,
        rating: movie.rating,
        image: movie.image,
        article: movie.article,
        id: movie.id,
        recipes: JSON.stringify(movie.recipes), 
      },
    });
  }
  
  /**
   * Navigate to the recipe detail screen with the provided recipe data
   * @param {Object} router - The router object for navigation
   * @param {Object} recipe - The recipe object containing its details
   */
  export function navigateToRecipeDetails(router, recipe) {
    router.push({
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
      },
    });
  }
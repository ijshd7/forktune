import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  ActivityIndicator,
  Image,
  SafeAreaView
} from 'react-native';

export default function RecipeApp() {
  const [recipe, setRecipe]: any = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]: any = useState(null);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      
      if (data.meals && data.meals.length > 0) {
        const mealData = data.meals[0];
        
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];
          
          if (ingredient && ingredient.trim() !== '') {
            ingredients.push(`${measure ? measure.trim() : ''} ${ingredient.trim()}`);
          }
        }
        
        setRecipe({
          id: mealData.idMeal,
          name: mealData.strMeal,
          category: mealData.strCategory,
          area: mealData.strArea,
          instructions: mealData.strInstructions,
          image: mealData.strMealThumb,
          ingredients: ingredients
        });
      }
    } catch (err) {
      setError('Failed to fetch recipe. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5 bg-rose-600 shadow-md shadow-rose-400">
        <Text className="text-3xl font-bold text-white text-center tracking-wide">
          🍽️ Forktune
        </Text>
      </View>

      {/* Action Button */}
      <View className="px-6 py-4">
        <TouchableOpacity
          className={`bg-rose-500 p-4 rounded-xl items-center shadow-md ${
            loading ? 'opacity-70' : ''
          }`}
          onPress={fetchRandomRecipe}
          disabled={loading}
        >
          <Text className="text-white text-lg font-semibold">
            {loading ? 'Searching...' : 'Get Random Recipe'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Loading Indicator */}
      {loading && (
        <View className="items-center mt-10">
          <ActivityIndicator size="large" color="#f43f5e" />
          <Text className="mt-3 text-base text-gray-500">Looking for something tasty...</Text>
        </View>
      )}

      {/* Error Message */}
      {error && (
        <View className="mx-6 my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <Text className="text-red-700 text-sm">{error}</Text>
        </View>
      )}

      {/* Recipe Display */}
      {recipe && !loading && (
        <ScrollView className="flex-1 px-6 py-4" contentContainerStyle={{ paddingBottom: 40 }}>
          {/* Title & Meta */}
          <Text className="text-2xl font-bold text-gray-800">{recipe.name}</Text>
          <Text className="text-sm text-gray-500 mb-4">{recipe.category} • {recipe.area}</Text>

          {/* Image */}
          {recipe.image && (
            <Image
              source={{ uri: recipe.image }}
              className="w-full h-56 rounded-xl mb-5"
              resizeMode="cover"
            />
          )}

          {/* Ingredients */}
          <View className="mb-6">
            <Text className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200 mb-3">
              🥕 Ingredients
            </Text>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <Text
                key={index}
                className="text-base text-gray-700 mb-1"
              >
                • {ingredient}
              </Text>
            ))}
          </View>

          {/* Instructions */}
          <View>
            <Text className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200 mb-3">
              📖 Instructions
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              {recipe.instructions}
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
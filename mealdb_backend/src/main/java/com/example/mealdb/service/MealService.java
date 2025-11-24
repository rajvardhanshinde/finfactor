package com.example.mealdb.service;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.example.mealdb.dto.CategoryDTO;
import com.example.mealdb.dto.MealDetailDTO;
import com.example.mealdb.dto.MealSummaryDTO;

import com.example.mealdb.api.MealDbApiClient;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class MealService {

    private final MealDbApiClient apiClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public MealService(MealDbApiClient apiClient) {
        this.apiClient = apiClient;
    }

    // --------------------------------------------------------
    // SEARCH MEALS BY NAME
    // --------------------------------------------------------
    @Cacheable(value = "searchMeals", key = "#name")
    public List<MealSummaryDTO> searchMeals(String name) {
        try {
            String response = apiClient.searchMeals(name);
            JsonNode root = objectMapper.readTree(response);
            JsonNode meals = root.get("meals");

            List<MealSummaryDTO> result = new ArrayList<>();

            if (meals != null && meals.isArray()) {
                for (JsonNode meal : meals) {
                    MealSummaryDTO dto = new MealSummaryDTO();
                    dto.setId(meal.get("idMeal").asText());
                    dto.setName(meal.get("strMeal").asText());
                    dto.setCategory(meal.get("strCategory").asText());
                    dto.setThumbnail(meal.get("strMealThumb").asText());
                    result.add(dto);
                }
            }

            return result;

        } catch (Exception e) {
            throw new RuntimeException("Error parsing search meals", e);
        }
    }

    // --------------------------------------------------------
    // GET ALL CATEGORIES
    // --------------------------------------------------------
    @Cacheable(value = "categories")
    public List<CategoryDTO> getCategories() {
        try {
            String response = apiClient.getCategories();
            JsonNode root = objectMapper.readTree(response);
            JsonNode categories = root.get("categories");

            List<CategoryDTO> list = new ArrayList<>();

            if (categories != null && categories.isArray()) {
                for (JsonNode category : categories) {
                    CategoryDTO dto = new CategoryDTO();
                    dto.setName(category.get("strCategory").asText());
                    dto.setThumbnail(category.get("strCategoryThumb").asText());
                    dto.setDescription(category.get("strCategoryDescription").asText());
                    list.add(dto);
                }
            }

            return list;

        } catch (Exception e) {
            throw new RuntimeException("Error parsing categories", e);
        }
    }

    // --------------------------------------------------------
    // GET MEALS BY CATEGORY
    // --------------------------------------------------------
    @Cacheable(value = "mealsByCategory", key = "#category")
    public List<MealSummaryDTO> getMealsByCategory(String category) {

        try {
            String response = apiClient.getMealsByCategory(category);
            JsonNode root = objectMapper.readTree(response);
            JsonNode meals = root.get("meals");

            List<MealSummaryDTO> result = new ArrayList<>();

            if (meals != null && meals.isArray()) {
                for (JsonNode meal : meals) {
                    MealSummaryDTO dto = new MealSummaryDTO();
                    dto.setId(meal.get("idMeal").asText());
                    dto.setName(meal.get("strMeal").asText());
                    dto.setThumbnail(meal.get("strMealThumb").asText());
                    dto.setCategory(category);
                    result.add(dto);
                }
            }

            return result;

        } catch (Exception e) {
            throw new RuntimeException("Error parsing meals by category", e);
        }
    }

    // --------------------------------------------------------
    // GET MEAL DETAILS BY ID
    // --------------------------------------------------------
    @Cacheable(value = "mealDetails", key = "#id")
    public MealDetailDTO getMealDetails(String id) {

        try {
            String response = apiClient.getMealDetails(id);
            JsonNode root = objectMapper.readTree(response);
            JsonNode meals = root.get("meals");

            if (meals == null || !meals.isArray()) {
                return null;
            }

            JsonNode meal = meals.get(0);

            MealDetailDTO dto = new MealDetailDTO();
            dto.setId(meal.get("idMeal").asText());
            dto.setName(meal.get("strMeal").asText());
            dto.setCategory(meal.get("strCategory").asText());
            dto.setArea(meal.get("strArea").asText());
            dto.setInstructions(meal.get("strInstructions").asText());
            dto.setThumbnail(meal.get("strMealThumb").asText());
            dto.setYoutube(meal.get("strYoutube").asText());

            // Extract ingredients dynamically (1-20)
            List<String> ingredients = new ArrayList<>();
            for (int i = 1; i <= 20; i++) {
                JsonNode ingredientNode = meal.get("strIngredient" + i);

                if (ingredientNode != null) {
                    String ingredient = ingredientNode.asText();

                    if (ingredient != null && !ingredient.isEmpty() && !ingredient.equals("null")) {
                        ingredients.add(ingredient);
                    }
                }
            }

            dto.setIngredients(ingredients);

            return dto;

        } catch (Exception e) {
            throw new RuntimeException("Error parsing meal details", e);
        }
    }

    // --------------------------------------------------------
    // GET RANDOM MEAL
    // --------------------------------------------------------
    @Cacheable(value = "randomMeal")
    public MealDetailDTO getRandomMeal() {

        try {
            String response = apiClient.getRandomMeal();
            JsonNode root = objectMapper.readTree(response);
            JsonNode meals = root.get("meals");

            if (meals == null || !meals.isArray()) {
                return null;
            }

            JsonNode meal = meals.get(0);

            MealDetailDTO dto = new MealDetailDTO();
            dto.setId(meal.get("idMeal").asText());
            dto.setName(meal.get("strMeal").asText());
            dto.setCategory(meal.get("strCategory").asText());
            dto.setArea(meal.get("strArea").asText());
            dto.setInstructions(meal.get("strInstructions").asText());
            dto.setThumbnail(meal.get("strMealThumb").asText());
            dto.setYoutube(meal.get("strYoutube").asText());

            // Extract ingredients
            List<String> ingredients = new ArrayList<>();
            for (int i = 1; i <= 20; i++) {
                JsonNode ingredientNode = meal.get("strIngredient" + i);

                if (ingredientNode != null) {
                    String ingredient = ingredientNode.asText();

                    if (ingredient != null && !ingredient.isEmpty() && !ingredient.equals("null")) {
                        ingredients.add(ingredient);
                    }
                }
            }

            dto.setIngredients(ingredients);

            return dto;

        } catch (Exception e) {
            throw new RuntimeException("Error parsing random meal", e);
        }
    }
}

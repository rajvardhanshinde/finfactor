package com.example.mealdb.api;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class MealDbApiClient {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

    public String searchMeals(String name) {
        return restTemplate.getForObject(BASE_URL + "search.php?s=" + name, String.class);
    }

    public String getCategories() {
        return restTemplate.getForObject(BASE_URL + "categories.php", String.class);
    }

    public String getMealsByCategory(String category) {
        return restTemplate.getForObject(BASE_URL + "filter.php?c=" + category, String.class);
    }

    public String getMealDetails(String id) {
        return restTemplate.getForObject(BASE_URL + "lookup.php?i=" + id, String.class);
    }

    public String getRandomMeal() {
        return restTemplate.getForObject(BASE_URL + "random.php", String.class);
    }
}

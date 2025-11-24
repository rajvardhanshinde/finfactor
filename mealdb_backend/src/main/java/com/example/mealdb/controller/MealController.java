package com.example.mealdb.controller;

import com.example.mealdb.dto.CategoryDTO;
import com.example.mealdb.dto.MealDetailDTO;
import com.example.mealdb.dto.MealSummaryDTO;
import com.example.mealdb.service.MealService;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "*")
public class MealController {

    private final MealService service;

    public MealController(MealService service) {
        this.service = service;
    }

    @GetMapping("/search")
public List<MealSummaryDTO> searchMeals(@RequestParam String name) {
    return service.searchMeals(name);
}

    @GetMapping("/categories")
    public List<CategoryDTO> getCategories() {
        return service.getCategories();
    }

    @GetMapping("/category/{category}")
    public List<MealSummaryDTO> getMealsByCategory(@PathVariable String category) {
        return service.getMealsByCategory(category);
    }

    @GetMapping("/{id}")
    public MealDetailDTO getMealDetails(@PathVariable String id) {
        return service.getMealDetails(id);
    }

    @GetMapping("/random")
    public MealDetailDTO getRandomMeal() {
        return service.getRandomMeal();
    }
}

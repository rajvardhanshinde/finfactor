package com.example.mealdb.dto;

import lombok.Data;
import java.io.Serializable;
import java.util.List;

@Data
public class MealDetailDTO implements Serializable {
    private String id;
    private String name;
    private String category;
    private String area;
    private String instructions;
    private String thumbnail;
    private String youtube;
    private List<String> ingredients;
}

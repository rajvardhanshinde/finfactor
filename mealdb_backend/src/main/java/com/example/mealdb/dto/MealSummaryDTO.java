package com.example.mealdb.dto;

import lombok.Data;
import java.io.Serializable;

@Data
public class MealSummaryDTO implements Serializable {
    private String id;
    private String name;
    private String category;
    private String thumbnail;
}

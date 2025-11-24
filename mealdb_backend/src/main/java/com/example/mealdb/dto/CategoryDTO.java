package com.example.mealdb.dto;

import lombok.Data;
import java.io.Serializable;

@Data
public class CategoryDTO implements Serializable {
    private String name;
    private String thumbnail;
    private String description;
}

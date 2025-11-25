import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "../service/api";
import MealCard from "../components/MealCard";

function CategoryMeals() {
  const { name } = useParams();   // category name from URL
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMeals();
  }, [name]);

  const loadMeals = async () => {
    try {
      const res = await getMealsByCategory(name);
      setMeals(res.data);
    } catch (err) {
      console.error("Error loading meals:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {name} Meals 🍛
      </h1>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading meals…</p>
      )}

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {/* No Meals */}
      {!loading && meals.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No meals found in this category.
        </p>
      )}
    </div>
  );
}

export default CategoryMeals;

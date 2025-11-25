import React, { useEffect, useState } from "react";
import { getRandomMeal } from "../service/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

function RandomMeal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadRandomMeal();
  }, []);

  const loadRandomMeal = async () => {
    try {
      const res = await getRandomMeal();
      setMeal(res.data);
    } catch (err) {
      console.error("Error fetching random meal:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (!meal)
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Could not load meal.
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Random Meal 🍽️
      </h1>

      {/* Meal Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={meal.thumbnail}
          alt={meal.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">{meal.name}</h2>
          <p className="text-gray-600 mt-1">
            <strong>Category:</strong> {meal.category}
          </p>
          <p className="text-gray-600">
            <strong>Area:</strong> {meal.area}
          </p>

          {/* View Details Button */}
          <button
            onClick={() => navigate(`/meal/${meal.id}`)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View Full Recipe
          </button>
        </div>
      </div>

      {/* Load another random meal */}
      <div className="text-center mt-8">
        <button
          onClick={loadRandomMeal}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
        >
          Show Another Meal 🔄
        </button>
      </div>
    </div>
  );
}

export default RandomMeal;

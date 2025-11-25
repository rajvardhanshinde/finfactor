import React from "react";
import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/meal/${meal.id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                 transition-all duration-300 cursor-pointer 
                 transform hover:-translate-y-2 overflow-hidden group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={meal.thumbnail}
          alt={meal.name}
          className="w-full h-52 object-cover transform 
                     group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        {/* Meal name */}
        <h2 className="text-lg font-bold text-gray-900">
          {meal.name}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500 mt-1">
          {meal.category}
        </p>

        {/* CTA Button */}
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl 
                     text-sm shadow-md hover:bg-blue-700 transition"
        >
          View Recipe →
        </button>
      </div>
    </div>
  );
}

export default MealCard;

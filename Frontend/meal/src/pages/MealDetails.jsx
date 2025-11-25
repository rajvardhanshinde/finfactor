import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDetails } from "../service/api";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMeal();
  }, [id]);

  const loadMeal = async () => {
    try {
      const res = await getMealDetails(id);
      setMeal(res.data);
    } catch (error) {
      console.error("Error loading meal details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 text-xl mt-10">Loading…</p>
    );

  if (!meal)
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Meal not found.
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {meal.name}
      </h1>

      {/* Image + Basic Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          src={meal.thumbnail}
          alt={meal.name}
          className="rounded-xl shadow-md w-full md:w-1/2"
        />

        {/* Info */}
        <div className="flex-1">
          <p className="text-lg">
            <span className="font-semibold">Category:</span> {meal.category}
          </p>
          <p className="text-lg mt-2">
            <span className="font-semibold">Area:</span> {meal.area}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            Ingredients 🧂
          </h2>

          <ul className="list-disc ml-6 text-gray-700">
            {meal.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Instructions 📖</h2>
        <p className="text-gray-700 leading-7 whitespace-pre-line">
          {meal.instructions}
        </p>
      </div>

      {/* YouTube Video */}
      {meal.youtube && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Video Tutorial 🎬</h2>
          <iframe
            width="100%"
            height="400"
            className="rounded-xl shadow-md"
            src={meal.youtube.replace("watch?v=", "embed/")}
            title="Meal Video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MealDetails;

import React, { useState } from "react";
import { searchMeals, getRandomMeal } from "../service/api";
import MealCard from "../components/MealCard";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await searchMeals(query);
      setMeals(res.data);
    } catch (err) {
      console.error("Error searching meals:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRandom = async () => {
    setLoading(true);
    try {
      const res = await getRandomMeal();
      setMeals([res.data]); // wrap single meal into array
    } catch (err) {
      console.error("Error fetching random meal:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="p-6 max-w-6xl mx-auto">

    {/* Title Section */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        Find Your Next Meal 🍽️
      </h1>
      <p className="text-gray-600 text-lg">
        Search recipes or get a random delicious meal
      </p>
    </div>

    {/* Search Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for meals…"
        className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-300
                  focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 
                  text-white rounded-xl shadow-md transition"
      >
        Search
      </button>

      {/* Random Meal Button */}
      <button
        onClick={handleRandom}
        className="px-6 py-3 bg-green-600 hover:bg-green-700
                  text-white rounded-xl shadow-md transition"
      >
        Feeling Hungry 😋
      </button>
    </div>

    {/* Loading */}
    {loading && <LoadingSpinner />}

    {/* Meals Grid */}
    {!loading && meals.length > 0 && (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    )}

    {/* No Results */}
    {!loading && meals.length === 0 && query.length > 0 && (
      <p className="text-center text-gray-500 text-lg">
        No meals found for “{query}”.
      </p>
    )}
  </div>
);

}

export default Home;

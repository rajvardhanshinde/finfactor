import React, { useEffect, useState } from "react";
import { getCategories } from "../service/api";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Meal Categories 🍱
      </h1>

      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading categories…</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </div>
  );
}

export default Categories;

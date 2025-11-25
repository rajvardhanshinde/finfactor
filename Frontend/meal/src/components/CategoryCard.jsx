import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${category.name}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
                 transform hover:-translate-y-2 overflow-hidden group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={category.thumbnail}
          alt={category.name}
          className="w-full h-44 object-cover transition-transform duration-300 
                     group-hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {category.name}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-3">
          {category.description}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;

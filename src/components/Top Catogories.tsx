"use client";

import React from "react";

const TopCategories = () => {
  // Array of category objects with name, image, and product count
  const categories = [
    {
      id: 1,
      name: "Wing Chair",
      productCount: "3,584 Products",
      image: "/images/wing-chair.png", // Update with the actual image path
    },
    {
      id: 2,
      name: "Wooden Chair",
      productCount: "157 Products",
      image: "/images/wooden-chair.png", // Update with the actual image path
    },
    {
      id: 3,
      name: "Desk Chair",
      productCount: "154 Products",
      image: "/images/desk-chair.png", // Update with the actual image path
    },
  ];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={category.image} // Category image
              alt={category.name} // Accessible alt text
              className="w-full h-48 object-cover" // Ensure consistent image size
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <p className="text-sm">{category.productCount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;

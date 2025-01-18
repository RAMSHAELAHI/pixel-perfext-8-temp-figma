"use client";

import React from "react";

const AllProducts = () => {
  // Product data array with corrected image paths and valid structure
  const products = [
    { id: 1, name: "Library Stool Chair", price: 20, image: "/images/line1.png", tag: "New" },
    { id: 2, name: "Library Stool Chair", price: 20, originalPrice: 30, image: "/images/line2.jpeg", tag: "Sales" },
    { id: 3, name: "Library Stool Chair", price: 20, image: "/images/line3.png" },
    { id: 4, name: "Library Stool Chair", price: 20, image: "/images/line4.png" },
    { id: 5, name: "Library Stool Chair", price: 20, image: "/images/tapa2.png", tag: "New" },
    { id: 6, name: "Library Stool Chair", price: 20, originalPrice: 30, image: "/images/grey.png", tag: "Sales" },
    { id: 7, name: "Library Stool Chair", price: 20, image: "/images/line3.png" },
    { id: 8, name: "Library Stool Chair", price: 20, image: "/images/line3.png" },
    { id: 9, name: "Library Stool Chair", price: 20, image: "/images/greywood.png", tag: "New" },
    { id: 10, name: "Library Stool Chair", price: 20, originalPrice: 30, image: "/images/line2.png", tag: "Sales" },
    { id: 11, name: "Library Stool Chair", price: 20, image: "/images/line3.png" },
    { id: 12, name: "Library Stool Chair", price: 20, image: "/images/blackwh.png" },
  ];

  return (
    <section className="p-8">
      {/* Section Title */}
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            {/* Conditional Rendering for Tags */}
            {product.tag && (
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                  product.tag === "New" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {product.tag}
              </span>
            )}
            {/* Product Image */}
            <div className="w-full h-64 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Name */}
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            {/* Product Price */}
            <p className="text-gray-700 font-medium">
              ${product.price}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </p>
            {/* Add to Cart Button */}
            <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;

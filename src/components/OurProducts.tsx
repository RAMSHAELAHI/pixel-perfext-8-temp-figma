"use client";

import React from "react";

const ProductGrid = () => {
  // Define an array of product objects, each containing details like id, name, price, image, and an optional tag or original price.
  const products = [
    {
      id: 1, // Unique identifier for the product
      name: "Library Stool Chair", // Name of the product
      price: 20, // Current price of the product
      image: "/images/chair1.png", // Path to the product image
      tag: "New", // Label indicating the product is new
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30, // Original price before discount, used to display a strike-through price
      image: "/images/chair2.png",
      tag: "Sales", // Label indicating the product is on sale
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/chair3.png", // This product does not have a tag or an original price
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/chair4.png",
    },
  ];

  return (
    <section className="p-8"> {/* Add padding around the section */}
      <h1 className="text-2xl font-bold mb-6">Our Products</h1> {/* Section title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Responsive grid layout */}
        {products.map((product) => (
          // Map through each product to create a card
          <div
            key={product.id} // Use unique id as React key
            className="border rounded-lg p-4 shadow hover:shadow-lg transition" // Card styling with hover effects
          >
            <div className="relative w-full h-40">
              {/* Product Image */}
              <img
                src={product.image} // Render product image
                alt={product.name} // Accessible alt text for the image
                className="w-full h-full object-cover rounded-md"
              />
              {/* Conditionally render a tag if it exists */}
              {product.tag && (
                <span
                  className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold rounded-full ${
                    product.tag === "New"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.tag} {/* Display the tag text */}
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2> {/* Product name */}
            <p className="text-gray-700 font-medium">
              ${product.price} {/* Display current price */}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2"> {/* Show original price with strike-through */}
                  ${product.originalPrice}
                </span>
              )}
            </p>
            <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full"> {/* Add to Cart button */}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

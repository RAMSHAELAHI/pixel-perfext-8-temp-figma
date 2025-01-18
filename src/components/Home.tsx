"use client";

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="Home"
        className="min-h-screen flex items-center bg-no-repeat bg-cover px-8"
        style={{
          backgroundImage: "url(/images/sofa.png)",
          backgroundSize: "auto 70%",
          backgroundPosition: "calc(50% + 2in) center",
        }}
      >
        <div className="max-w-lg">
          <p className="text-sm font-light text-gray-500 uppercase tracking-wide">
            Welcome To Chairy
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Best Furniture <br />
            Collection For Your <br />
            Interior.
          </h1>

          <Link href="/shop">
            <button className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-md shadow-md text-lg font-medium hover:bg-teal-600 transition">
              Shop Now →
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 1, name: "Library Stool Chair", price: 20, tag: "New", image: "/images/line 1.png" },
            { id: 2, name: "Library Stool Chair", price: 20, originalPrice: 30, tag: "Sales", image: "/images/line 2.jpeg" },
            { id: 3, name: "Library Stool Chair", price: 20, tag: "New" , image: "/images/line 3.png" },
            { id: 4, name: "Library Stool Chair", price: 20, tag: "Sales",image: "/images/line 4.png" },
          ].map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              {/* Display tag if available */}
              {product.tag && (
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                    product.tag === "New" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.tag}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 font-medium">
                ${product.price}
                {product.originalPrice && (
                  <span className="line-through text-gray-500 ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, name: "Wing Chair", image: "/images/top a1.png" },
            { id: 2, name: "Wooden Chair", image: "/images/tap a2.png" },
            { id: 3, name: "Desk Chair", image: "/images/top 3.png" },
          ].map((category) => (
            <div
              key={category.id}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="text-sm">154 Products</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Styles Section */}
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-6">Explore New and Popular Styles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/line 3.png",
            "/images/line 4.png",
            "/images/grey.png",
            "/images/line 1.png",
            "/images/tap a2.png"
          ].map((image, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-lg shadow transition hover:shadow-lg ${
                idx === 0 ? "sm:col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Style ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

     {/* Our Products Section */}
<section className="p-8">
  <h1 className="text-2xl font-bold mb-6">Our Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      "/images/line 1.png",
      "/images/line 2.jpeg",
      "/images/line 3.png",
      "/images/line 4.png",
      "/images/grey2.png",
      "/images/grey.png",
      "/images/black.png",
      "/images/tap a2.png",
    ].map((imagePath, idx) => (
      <div
        key={idx}
        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <span
          className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 bg-red-100 text-red-800"
        >
          Sale
        </span>
        <img
          src={imagePath}
          alt={`Product ${8}`}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">Library Stool Chair</h2>
        <p className="text-gray-700 font-medium">
          $20
          <span className="line-through text-gray-500 ml-2">$30</span>
        </p>
        <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Home;

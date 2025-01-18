"use client";

import React from "react";

const ExploreStyles = () => {
  const styles = [
    {
      id: 1,
      image: "/images/style1.png", // Replace with the actual image path
      isLarge: true,
    },
    {
      id: 2,
      image: "/images/style2.png", // Replace with the actual image path
    },
    {
      id: 3,
      image: "/images/style3.png", // Replace with the actual image path
    },
    {
      id: 4,
      image: "/images/style4.png", // Replace with the actual image path
    },
    {
      id: 5,
      image: "/images/style5.png", // Replace with the actual image path
    },
  ];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-6">Explore New and Popular Styles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {styles.map((style, index) => (
          <div
            key={style.id}
            className={`overflow-hidden rounded-lg shadow transition hover:shadow-lg ${
              style.isLarge ? "sm:col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={style.image}
              alt={`Style ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-center rotate-90 transform origin-left text-lg font-semibold text-gray-700">
            EXPLORE NEW AND POPULAR STYLES
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreStyles;

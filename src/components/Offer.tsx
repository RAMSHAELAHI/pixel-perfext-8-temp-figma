'use client';
import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hours',
      description: 'Get 20% Off On All Items From 5pm Till 7pm',
    },
    {
      title: 'Family Deal',
      description: 'Get Free Delivery on Orders above $20 Minimum',
    },
 
  
    {
      title: 'New Year Deal',
      description: 'Buy Any one Interior set Get One Sofa Dry Cleaner Free'
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description); // Corrected alert syntax
  };

  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-emerald-700 shadow-lg rounded-lg p-6 text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-black">{offer.title}</h3>
              <p className= "text-1xl font-semibold  text-white mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

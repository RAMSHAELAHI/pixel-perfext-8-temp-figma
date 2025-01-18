import React from "react";

const floatingImagesConstentBlock = () => {
  return (
    <section className="container mx-auto py-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-6">
        <h2 className="text-3xl font-bold mb-4 text-amber-700">
          {" "}
        What Makes Our Brand Different?
        </h2>
        <p className="text-blue-950 mb:4 ">
        "Discover premium interior furniture designed to elevate your space and reflect your unique style. From timeless statement pieces to functional designs, our collection combines elegance, quality, and comfort to create a home you’ll love. Redefine your interiors with sophistication and lasting beauty today!"!
        </p>
        <br />
        <button className=" bg-amber-800 text-amber-400 px-4 py-2  rounded hover:bg-amber-400 transition duration-300">
          {" "}
          Order Now
        </button>
        <h3 className="4-xl font-semibold mt-6 mb-2 text-center text-amber-700">
            {" "}
          Coming Soon Our Newly Productive Interior Brand Launches{" "}
        </h3>
        <ul className="1-xl font-semibold mt-6 mb-2 text-center text-blue-950"> 
             
             <li> <strong> Premium Quality : </strong>
             Use of high-quality, sustainable materials.
             Attention to detail in craftsmanship and finishing.</li>
             <br />
             <li> <strong> Innovative Design : </strong>
             Pioneering cutting-edge styles and trends.
             Blending traditional aesthetics with modern elements for timeless appeal.</li>
             <br />
             <li>   <strong> Sustainability : </strong>
             Commitment to eco-friendly practices.
             Designing with materials and techniques that reduce environmental impact.</li>
             <br />
             <li> <strong> Functionality & Comfort  : </strong>
             Designs that balance beauty and practicality.
             Creating spaces that are inviting, ergonomic, and functional.</li>
        
             <br />
             <li> <strong> High-Quality Materials  : </strong>
             Premium woods, metals, fabrics, and finishes that exude luxury.
            Materials that are not only beautiful but also long-lasting and resilient.</li>
             <br />
             <li> <strong> Guarantee  : </strong>
             "Guaranteed smooth delivery, professional installation, and exceptional after-sales support."
              Eliminates stress for customers, ensuring a seamless process.</li>
        </ul> 
        
      </div>
        
<div className="md:w-1/2 mt-2 md:mt-0">
<img src="/images/brand interior.jpg"
alt="Cosmetic"
className="w-full  h-auto  rounded-lg shadow-lg translate-transform duration-500 ease-in-out transform hover:scale-105 mr-7"

 />
 </div>



    </section>
  );
};
export default floatingImagesConstentBlock;

// src/components/TopBrands.js
import React from 'react';
import brands from '../assets/assets';

const TopBrands = () => {
  return (
    <section className="py-10 px-6 md:px-16 lg:px-24 bg-sky-100 rounded-lg shadow-md my-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center bg-white p-4 rounded shadow hover:shadow-lg transition-all"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;

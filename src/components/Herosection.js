import { Link } from 'react-router-dom';
import heroImage from "../assets/mart.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 shadow-md rounded-lg my-10">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          Shop the Latest Deals at <span className="text-blue-600">ShopMart</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover top deals on electronics, fashion, groceries, and more — all in one place.
        </p>
        <Link to="/products">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="ShopMart Hero"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded"
        />
      </div>
      
    </section>
  );
};

export default HeroSection;

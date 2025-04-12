import promoImage from "../assets/promo.jpg";

const PromoBanner = () => {
  return (
    <section className="bg-blue-100 px-6 md:px-16 py-6 rounded-lg shadow-md my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Image Section */}
        <div className="w-full md:w-3/5 flex justify-center">
          <img 
            src={promoImage} 
            alt="Promo Banner"
            className="w-full max-w-lg h-auto object-contain rounded"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Exclusive Bank Offers 🎉
          </h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            Enjoy up to 15% off using HDFC, ICICI & SBI cards on purchases above ₹999.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-base">
            Grab Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;

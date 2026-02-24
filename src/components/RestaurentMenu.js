const RestaurentMenu = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16">
      
      {/* Restaurant Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Pizza Hut
        </h1>

        <div className="bg-gray-50 rounded-2xl p-5 shadow-inner">
          <div className="flex items-center gap-3 text-sm md:text-base">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              ★ 4.3
            </span>
            <span className="font-medium text-gray-700">
              (9.5K+ ratings)
            </span>
            <span className="text-gray-400">•</span>
            <span className="font-semibold text-gray-800">
              ₹350 for two
            </span>
          </div>

          <p className="text-orange-600 font-medium mt-3">
            Pizzas
          </p>

          <div className="mt-3 text-gray-600 text-sm space-y-1">
            <p>
              <span className="font-semibold">Outlet</span> Ashoka Marg
            </p>
            <p>25–30 mins</p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">
          Recommended (20)
        </h2>

        {/* Item 1 */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row justify-between gap-6 mb-6">
          
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold">
              Margherita
            </h3>

            <p className="text-gray-900 font-semibold mt-1">
              ₹169
            </p>

            <p className="text-green-600 text-sm mt-1">
              ★ 4.0 (167)
            </p>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Classic cheese pizza topped with signature pan sauce 
              and mozzarella. A perfect choice for cheese lovers.
            </p>
          </div>

          {/* Right Image + Button */}
          <div className="relative w-full md:w-48">
            <img
              src="https://images.unsplash.com/photo-1601924582975-7e3e63fbe3e1"
              alt="pizza"
              className="w-full h-40 object-cover rounded-2xl"
            />

            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600 hover:bg-gray-100 transition">
              ADD
            </button>

            <p className="text-center text-xs text-gray-400 mt-2">
              Customisable
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row justify-between gap-6">
          
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold">
              Veggie Feast
            </h3>

            <p className="text-gray-900 font-semibold mt-1">
              ₹269
            </p>

            <p className="text-green-600 text-sm mt-1">
              ★ 4.2 (143)
            </p>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Loaded with fresh capsicum, sweet corn, onions 
              and mozzarella cheese with flavourful pan sauce.
            </p>
          </div>

          {/* Right Image + Button */}
          <div className="relative w-full md:w-48">
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
              alt="pizza"
              className="w-full h-40 object-cover rounded-2xl"
            />

            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600 hover:bg-gray-100 transition">
              ADD
            </button>

            <p className="text-center text-xs text-gray-400 mt-2">
              Customisable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
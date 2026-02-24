const RestaurentMenuCategory = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      
      {/* Whole Category Container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Category Header */}
        <div className="px-6 py-5 flex justify-between items-center cursor-pointer">
          <h2 className="text-xl md:text-2xl font-bold">
            Recommended (20)
          </h2>

          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="border-t"></div>

        {/* Items Wrapper */}
        <div className="divide-y">

          {/* Item 1 */}
          <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
            
            {/* Left */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
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
                and mozzarella. Perfect for cheese lovers.
              </p>
            </div>

            {/* Right */}
            <div className="relative w-full md:w-44 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1601924582975-7e3e63fbe3e1"
                alt="pizza"
                className="w-full h-36 object-cover rounded-xl"
              />

              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600">
                ADD
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Customisable
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                Veggie Feast
              </h3>

              <p className="text-gray-900 font-semibold mt-1">
                ₹269
              </p>

              <p className="text-green-600 text-sm mt-1">
                ★ 4.2 (143)
              </p>

              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Fresh capsicum, sweet corn, onions and mozzarella 
                with flavourful pan sauce.
              </p>
            </div>

            <div className="relative w-full md:w-44 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
                alt="pizza"
                className="w-full h-36 object-cover rounded-xl"
              />

              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600">
                ADD
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Customisable
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurentMenuCategory;
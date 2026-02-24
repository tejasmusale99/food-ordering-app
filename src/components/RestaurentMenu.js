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
    </div>
  );
};

export default RestaurentMenu;
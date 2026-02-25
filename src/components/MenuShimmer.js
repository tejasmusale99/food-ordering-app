const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      
      {/* Restaurant Header Shimmer */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <div className="h-8 w-1/2 bg-gray-300 rounded mb-4"></div>

        <div className="bg-gray-100 rounded-xl p-5 space-y-3">
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/5 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Category Title Shimmer */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-5 flex justify-between items-center">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="border-t"></div>

        {/* Menu Item Shimmer Cards */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="p-6 flex flex-col md:flex-row justify-between gap-6 border-b last:border-none"
          >
            {/* Left */}
            <div className="flex-1 space-y-3">
              <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/5 bg-gray-300 rounded"></div>
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
            </div>

            {/* Right */}
            <div className="relative w-full md:w-44 flex-shrink-0">
              <div className="w-full h-36 bg-gray-300 rounded-xl"></div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 h-8 w-20 bg-white rounded-xl shadow-md"></div>

              <div className="h-3 w-24 bg-gray-200 rounded mt-3 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
const Shimmer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-8">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6
        "
      >
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 space-y-4"
            >
              {/* Image shimmer */}
              <div className="h-40 w-full rounded-xl bg-gray-200 animate-pulse"></div>

              {/* Title */}
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>

              {/* Cuisine */}
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>

              {/* Rating & Time */}
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
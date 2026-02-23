const CarouselShimmer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-6">
      
      {/* Section Title Shimmer */}
      <div className="h-6 w-60 bg-gray-200 rounded mb-6 animate-pulse"></div>

      {/* Horizontal Scroll Shimmer */}
      <div className="flex gap-6 overflow-hidden">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] 
                         bg-white rounded-2xl shadow-sm p-4 space-y-4"
            >
              {/* Image */}
              <div className="h-36 w-full rounded-xl bg-gray-200 animate-pulse"></div>

              {/* Title */}
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>

              {/* Subtitle */}
              <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarouselShimmer;
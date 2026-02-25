const ResCategoryItems = ({ resCategoryItems }) => {
  const menuItems = resCategoryItems?.card?.card?.itemCards;
  console.log(menuItems);

  return (
    <div className="divide-y">
      {menuItems.map((item) => {
        const { name, description, defaultPrice, ratings, imageId } = item?.card?.info;
        return (
          <div
            key={item?.card?.info?.id}
            className="p-6 flex flex-col md:flex-row justify-between gap-6"
          >
            {/* Left */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{name}</h3>

              <p className="text-gray-900 font-semibold mt-1">
                ₹{defaultPrice / 100}
              </p>

              <p className="text-green-600 text-sm mt-1">
                ★ {ratings?.aggregatedRating?.rating}{" "}
                {"(" + ratings?.aggregatedRating?.ratingCountV2 + ")"}{" "}
              </p>

              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right */}
            <div className="relative w-full md:w-44 flex-shrink-0">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId
                }
                alt={name}
                className="w-full h-36 object-cover rounded-xl"
              />

              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600 cursor-pointer">
                ADD
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Customisable
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResCategoryItems;

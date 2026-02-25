import { useEffect, useState } from "react";
import RestaurentMenuCategory from "./RestaurentMenuCategory";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const menuFetch = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.0051498&lng=73.7676967&restaurantId=" +
        resId,
    );

    const menuJson = await menuFetch.json();

    console.log(menuJson);

    setResMenu(menuJson);
  };

  const info = resMenu?.data?.cards[2]?.card?.card?.info;

 

  console.log(RestaurantItemCategories)

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16">
      {/* Restaurant Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{info?.name}</h1>

        <div className="bg-gray-50 rounded-2xl p-5 shadow-inner">
          <div className="flex items-center gap-3 text-sm md:text-base">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              ★ {info?.avgRatingString}
            </span>
            <span className="font-medium text-gray-700">
              {info?.totalRatingsString}
            </span>
            <span className="text-gray-400">•</span>
            <span className="font-semibold text-gray-800">
              {info?.costForTwoMessage}
            </span>
          </div>

          <p className="text-orange-600 font-medium mt-3"> {info?.cuisines + "," }</p>

          <div className="mt-3 text-gray-600 text-sm space-y-1">
            <p>
              <span className="font-semibold">Outlet</span> {info?.areaName}
            </p>
            <p>{info?.sla?.slaString}</p>
          </div>
        </div>
      </div>

      <RestaurentMenuCategory />
    </div>
  );
};

export default RestaurentMenu;

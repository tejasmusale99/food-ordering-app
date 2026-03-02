import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const WhatOnYourMindRestro = () => {
  const { menuId } = useParams();
  const [mindRestro, setMindRestro] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchWhatMenuRestro();
  }, [menuId]);

  const fetchWhatMenuRestro = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&collection=${menuId}&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );

    const json = await response.json();
console.log(json);

    const cards =
      json?.data?.cards?.filter(
        (c) => c?.card?.card?.info
      ) || [];


console.log(cards);

    setTitle(json?.data?.cards?.[0]?.card?.card?.title);
    setMindRestro(cards);
  };

  if (mindRestro.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold animate-pulse">
          Loading Restaurants...
        </h1>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 py-8 bg-gray-50 min-h-screen">
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          {title}
        </h1>
        <p className="text-gray-500 mt-2">
          Explore top restaurants curated for you
        </p>
        <h2 className="mt-4 text-lg font-semibold">
          {mindRestro.length} Restaurants to explore
        </h2>
      </div>

      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-6">

        {mindRestro.map((res) => {
          const info = res?.card?.card?.info;
          return (
            <Link key={info?.id} to={`/restaurants/${info?.id}`}>
            <div
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
            >
              
              <div className="relative">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    info?.cloudinaryImageId
                  }
                  alt={info?.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                {info?.aggregatedDiscountInfoV3?.header && (
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3 rounded-b-2xl">
                    <p className="text-white font-bold text-sm">
                      {info?.aggregatedDiscountInfoV3?.header}{" "}
                      {info?.aggregatedDiscountInfoV3?.subHeader}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg truncate">
                  {info?.name}
                </h3>

                <div className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">
                    ⭐ {info?.avgRating}
                  </span>
                  <span>• {info?.sla?.slaString}</span>
                </div>

                <p className="text-gray-500 text-sm mt-2 truncate">
                  {info?.cuisines?.join(", ")}
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  {info?.areaName}
                </p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WhatOnYourMindRestro;
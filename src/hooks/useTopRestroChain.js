import { useEffect, useState } from "react";
const useTopRestroChain = () => {
  const [topRestroNashik, setTopRestroNashik] = useState([]);
  useEffect(() => {
    topRestroFetch();
  }, []);

  const topRestroFetch = async () => {
    const nashikTopRestro = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await nashikTopRestro.json();

    console.log(json);

    const nashikRestroCards = json?.data?.cards.find(
      (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    const topRestaurants =
      nashikRestroCards?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setTopRestroNashik(topRestaurants);
  };
  return topRestroNashik;
};

export default useTopRestroChain;

import { useEffect, useState } from "react";
import topRestroChainList from "../utils/topRestroChainList";
import { TopRestroChain } from "./TopRestroChain";

const TopChainCarousel = () => {
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

  return (
    <section className="top-chain-section">
      <h2 className="section-title">Top restaurant chains in Nashik</h2>

      <div className="top-chain-scroll-container">
        <div className="top-chain-restaurants-container">
          {topRestroNashik.map((restroChainItem, id) => {
            return (
              <TopRestroChain restroChainItem={restroChainItem} key={restroChainItem.info.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopChainCarousel;

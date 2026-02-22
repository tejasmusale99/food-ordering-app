import { useEffect, useState } from "react";
// import topRestroChainList from "../utils/topRestroChainList";
import RestaurentCard from "./RestaurentCard";
import TopChainCarousel from "./TopChainCarousel";

const Body = () => {
  const [restrolistCards, setRestroListCards] = useState([]);

  useEffect(() => {
    fetchResCard();
  }, []);

  const fetchResCard = async () => {
    const fetchRes = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&page_type=DESKTOP_WEB_LISTING",
    );
    const jsonData = await fetchRes.json();
    console.log(jsonData);

    const restroCards = jsonData?.data?.cards.find(
      (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    // console.log(restroCards);

    const restaurants =
      restroCards?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log(restaurants);

    setRestroListCards(restaurants);
  };

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
        />
        <button>Search</button>
      </div>

      <TopChainCarousel />

      <div className="divider"></div>

      <section className="top-chain-section">
        <h2 className="section-title">
          Restaurants with online food delivery in Nashik
        </h2>
      </section>

      <div className="restaurants-container">
        {restrolistCards.map((restaurentCardItem, id) => {
          return <RestaurentCard reslist={restaurentCardItem} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

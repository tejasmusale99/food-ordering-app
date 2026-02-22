import topRestroChainList from "../utils/topRestroChainList";
import RestaurentCard from "./RestaurentCard";
import TopChainCarousel from "./TopChainCarousel";

const Body = () => {
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
        {topRestroChainList.map((restaurentCardItem, id) => {
          return (
            <RestaurentCard restaurentCardItem={restaurentCardItem} key={id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

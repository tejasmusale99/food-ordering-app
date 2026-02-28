
// import topRestroChainList from "../utils/topRestroChainList";
import RestaurentCard from "./RestaurentCard";
import TopChainCarousel from "./TopChainCarousel";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurentCards from "../hooks/useRestaurentCards";

const Body = () => {
  
  const {
  restrolistCards,
  searchText,
  setSearchText,
  filtredRestro,
  searchRestro
} = useRestaurentCards();

  if (restrolistCards.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search-bar">
        <form onSubmit={searchRestro}>
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <TopChainCarousel />

      <div className="divider"></div>

      <section className="top-chain-section">
        <h2 className="section-title">
          Restaurants with online food delivery in Nashik
        </h2>
      </section>

      <div className="restaurants-container">
        {filtredRestro.map((restaurentCardItem) => {
          return (
            <Link
              key={restaurentCardItem.info.id}
              to={`/restaurants/${restaurentCardItem.info.id}`}
            >
              <RestaurentCard reslist={restaurentCardItem} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

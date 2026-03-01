import { TopRestroChain } from "./TopRestroChain";
import CarouselShimmer from "../components/CarouselShimmer";
import useTopRestroChain from "../hooks/useTopRestroChain";
import { Link } from "react-router-dom";

const TopChainCarousel = () => {
  const topRestroNashik = useTopRestroChain();
  if (topRestroNashik.length === 0) {
    return <CarouselShimmer />;
  }

  return (
    <section className="top-chain-section">
      <h2 className="section-title">Top restaurant chains in Nashik</h2>

      <div className="top-chain-scroll-container">
        <div className="top-chain-restaurants-container">
          {topRestroNashik.map((restroChainItem) => {
            return (
              <Link key={restroChainItem.info.id} to={`/restaurants/${restroChainItem.info.id}`}>
              <TopRestroChain
                restroChainItem={restroChainItem}
                key={restroChainItem.info.id}
              />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopChainCarousel;

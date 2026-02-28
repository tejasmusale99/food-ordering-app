import { TopRestroChain } from "./TopRestroChain";
import CarouselShimmer from "../components/CarouselShimmer";
import useTopRestroChain from "../hooks/useTopRestroChain";

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
              <TopRestroChain
                restroChainItem={restroChainItem}
                key={restroChainItem.info.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopChainCarousel;

import topRestroChainList from "../utils/topRestroChainList";
import {TopRestroChain} from './TopRestroChain'

const TopChainCarousel = () => {
  return (
    <section className="top-chain-section">
      <h2 className="section-title">Top restaurant chains in Nashik</h2>

      <div className="top-chain-scroll-container">
        <div className="top-chain-restaurants-container">
          {topRestroChainList.map((restroChainItem, id) => {
            return (
              <TopRestroChain restroChainItem={restroChainItem} key={id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopChainCarousel;

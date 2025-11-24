const RestaurentCard = (props) => {
console.log(props.restaurentCardItem.info);

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    slaString,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = props?.restaurentCardItem?.info;

    const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="restaurant-card">
      <div className="card-image">
          <img src={url + cloudinaryImageId} alt="The Spice Hub" />
       {aggregatedDiscountInfoV3?.subHeader && <span className="discount"> {aggregatedDiscountInfoV3?.subHeader} </span>} 
      </div>
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisine">{cuisines.join(' ')}</p>
        <div className="card-footer">
          <span className="rating">⭐ {avgRating}</span>
          <span className="delivery-time">{sla?.slaString}</span>
          <span className="cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};


export default RestaurentCard
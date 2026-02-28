import { useEffect, useState } from "react";

const useRestaurentCards = () => {
  const [restrolistCards, setRestroListCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtredRestro, setFiltredRestro] = useState([]);

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

    const restaurants =
      restroCards?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setRestroListCards(restaurants);
    setFiltredRestro(restaurants);
  };

  const searchRestro = (e) => {
    e.preventDefault();
    const searchRestroResult = restrolistCards.filter((item) => {
      return item.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFiltredRestro(searchRestroResult);
  };
return {
  restrolistCards,
  searchText,
  setSearchText,
  filtredRestro,
  searchRestro
};
};


export default useRestaurentCards;
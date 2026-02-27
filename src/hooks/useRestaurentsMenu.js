import { useEffect, useState } from "react";

const useRestaurentsMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const menuFetch = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.0051498&lng=73.7676967&restaurantId=" +
        resId,
    );

    const menuJson = await menuFetch.json();

    // console.log(menuJson);

    setResMenu(menuJson);
  };

  return resMenu;
};

export default useRestaurentsMenu;

import React from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

function useRestaurantMenu(resId) {
  const [menuItems, setMenuItems] = React.useState("");
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await res.json();
    // console.log(json);
    setMenuItems(json?.data?.cards);
  }

  return menuItems;
}

export default useRestaurantMenu;

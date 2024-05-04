import React from "react";
import { RESTAURANT_MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const [menuItems, setMenuItems] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await res.json();
    setMenuItems(json.data.cards);
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
    //     .itemCards
    // );
    // setMenuItems(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
    //     .itemCards
    // );
  }
  if (menuItems.length === 0) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>{menuItems[2].card.card.info.name}</h1>
      <p>{menuItems[2].card.card.info.costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems[4].groupedCard.cardGroupMap.REGULAR.cards.map(
          (item) => {
            console.log(item.card.card);
            return (
              <div>
                <h3>{item.card.card.title}</h3>
                <ul>
                  {item.card.card.itemCards &&
                    item.card.card.itemCards.map((item) => (
                      <li>{item.card.info.name}</li>
                    ))}
                  {item.carousel &&
                    item.carousel.map((item) => <li>{item.title}</li>)}
                </ul>
              </div>
            );
          }
          //   console.log(item.card.card?.itemCards?.card?.info?.name)
          //   <li>{item.card.card?.itemCards?.card?.info?.name}</li>
        )}
      </ul>
    </div>
  );
}

export default RestaurantMenu;

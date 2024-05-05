import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../custom-hooks/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const menuItems = useRestaurantMenu(resId);

  if (menuItems.length === 0) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>{menuItems[2].card.card.info.name}</h1>
      <p>{menuItems[2].card.card.info.costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems[4].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
          console.log(item.card.card);
          return (
            <div>
              <h3>{item.card.card.title}</h3>
              <ul>
                {item.card.card.itemCards &&
                  item.card.card.itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                  ))}
                {item.carousel &&
                  item.carousel.map((item) => <li>{item.title}</li>)}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;

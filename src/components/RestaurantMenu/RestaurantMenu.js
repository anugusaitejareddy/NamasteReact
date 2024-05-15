import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../custom-hooks/useRestaurantMenu";
import MenuItems from "../MenuItems";

function RestaurantMenu() {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  const [showCategoryIndex, setShowCategoryIndex] = React.useState(0);

  function handleShowCategoryIndex(id) {
    setShowCategoryIndex(id);
  }
  /* menu[4] contains the menu */
  const itemsList = menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (categories) =>
      categories.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (menu.length === 0) return <h2>Loading...</h2>;

  /* menu[2] contains RestaurantInfo (name, costForTwo, rating, cuisine etc) */
  const { name, costForTwoMessage, cuisines } = menu[2].card.card.info;

  return (
    <MenuContainer>
      <ResName>{name}</ResName>
      <ResInfo>
        {cuisines.join(", ")} - {costForTwoMessage}
      </ResInfo>

      <ItemsListContainer>
        <MenuHeading>Menu</MenuHeading>
        <ul>
          {itemsList.map((item, index) => {
            return (
              <MenuItems
                itemData={item}
                showCategory={index === showCategoryIndex}
                handleShowCategoryIndex={handleShowCategoryIndex}
                index={index}
              />
            );
          })}
        </ul>
      </ItemsListContainer>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 24px;
`;

const ResName = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const ResInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const ItemsListContainer = styled.div`
  margin-top: 24px;
`;

const MenuHeading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`;

const ListContainer = styled.div`
  margin: 28px 0;
  padding: 12px;
  margin: 12px;
`;

const ItemsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;

const ItemsTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 8px 0;
`;

const ToggleArrow = styled.div`
  margin-top: 4px;
  padding-left: 12px;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ItemContainer = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 16px;
`;

const ItemInfo = styled.div`
  flex: 3;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 150px;
  overflow: hide;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export default RestaurantMenu;

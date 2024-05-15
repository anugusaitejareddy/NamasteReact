import React from "react";
import styled from "styled-components";
import { CLOUDINARY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {
  rating3andBelow,
  rating4andAbove,
  ratingBtwn3and4,
} from "../utils/constants";

function MenuItems({ itemData, showCategory, handleShowCategoryIndex, index }) {
  const { title } = itemData.card.card;
  const [showItemData, setShowItemData] = React.useState(false);

  // check how to create classes in styled components
  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <>
      <ListContainer>
        <ItemsTitleContainer
          onClick={() => {
            handleShowCategoryIndex(index);
            setShowItemData(!showItemData);
          }}
        >
          <ItemsTitle>
            {title} ({itemData.card.card.itemCards.length})
          </ItemsTitle>
          <ToggleArrow>▼</ToggleArrow>
        </ItemsTitleContainer>

        {showCategory &&
          showItemData &&
          itemData.card.card.itemCards.map((itemCard) => {
            const {
              name,
              id,
              isVeg,
              price,
              defaultPrice,
              ratings,
              description,
              imageId,
            } = itemCard.card.info;
            return (
              <ItemContainer>
                <ItemInfo>
                  <p>{isVeg ? "🟢" : "🔴"}</p>
                  <ItemName key={id}>{name}</ItemName>
                  <p>₹{price ? price / 100 : defaultPrice / 100}</p>

                  {ratings.aggregatedRating.rating ? (
                    <>
                      <ItemRating
                        style={
                          ratings.aggregatedRating.rating >= 3
                            ? ratings.aggregatedRating.rating >= 4
                              ? rating4andAbove
                              : ratingBtwn3and4
                            : rating3andBelow
                        }
                      >
                        {ratings.aggregatedRating.rating}
                      </ItemRating>
                      <span style={{ color: "#888" }}>
                        {" "}
                        ({ratings.aggregatedRating.ratingCountV2})
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  <ItemDescription>{description}</ItemDescription>
                </ItemInfo>
                <ImageContainer>
                  {imageId && <ItemImage src={CLOUDINARY_URL + imageId} />}
                  <ItemAddBtn onClick={() => handleAddItem(itemCard)}>
                    Add{" "}
                  </ItemAddBtn>
                </ImageContainer>
              </ItemContainer>
            );
          })}
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  margin: 28px 0;
  padding: 12px;
  margin: 12px;
  border-bottom: 16px solid #f2f2f2;
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

const ItemName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ItemRating = styled.span`
  color: green;
  font-weight: bold;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 150px;
  overflow: hide;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const ItemAddBtn = styled.button`
  background: #fff;
  width: 100px;
  color: rgb(27, 166, 114);
  text-transform: upperCase;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 10px;
  box-shadow: 4px 8px 16px -10px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(50%, 300%);
  line-height: 24px;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #ccc;
  }
`;

export default MenuItems;

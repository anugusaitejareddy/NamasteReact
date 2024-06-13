import styled from "styled-components";
import React from "react";
import { CLOUDINARY_URL } from "../../utils/constants";
import { UserContext } from "../../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { loggedInUser } = React.useContext(UserContext);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <ResCard>
      <ResImgContainer>
        <ResImg src={CLOUDINARY_URL + cloudinaryImageId} />
      </ResImgContainer>
      <ResName>{name}</ResName>
      <ResCusinies>{cuisines.join(", ")}</ResCusinies>
      <h4>{avgRating} rating</h4>
      <h4>{costForTwo}</h4>
    </ResCard>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div>
      <PromotedLabel>Promoted</PromotedLabel>
      <RestaurantCard {...props} />
    </div>
  );
};

const ResCard = styled.div`
  width: 300px;

  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;

const ResImgContainer = styled.div`
  width: 280px;
  height: 200px;
  overflow: hidden;
`;

const ResImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ResName = styled.h3`
  font-size: 24px;
  margin-top: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResCusinies = styled.h4`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PromotedLabel = styled.p`
  position: absolute;
  color: white;
  background-color: hsl(0deg, 50%, 10%, 0.8);
  padding: 0 4px;
`;
export default RestaurantCard;

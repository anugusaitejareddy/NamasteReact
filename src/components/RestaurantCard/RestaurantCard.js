import { CLOUDINARY_URL } from "../../utils/constants";

const RestaurantCard = ({ name, cuisine, rating, imageId, costForTwo }) => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img src={CLOUDINARY_URL + imageId} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating} rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

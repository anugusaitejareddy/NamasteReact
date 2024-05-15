import React from "react";
import styled from "styled-components";
import RestaurantCard from "../RestaurantCard";
import { RESTAURANTS } from "../../utils/mockData";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../custom-hooks/useOnlineStatus";
import { withPromotedLabel } from "../RestaurantCard";
import { UserContext } from "../../utils/UserContext";

const INITIAL_RESTAURANTS = RESTAURANTS;

const Body = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { loggedInUser, setUserName } = React.useContext(UserContext);

  const PromotedResCard = withPromotedLabel(RestaurantCard);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    setRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  function handleRatingFilter() {
    const nextRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setFilteredRestaurants(nextRestaurants);
  }

  function handleResetFilters() {
    setFilteredRestaurants(restaurants);
    setSearchTerm("");
  }

  function handleSearch() {
    const searchResult = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm)
    );

    setFilteredRestaurants(searchResult);
  }

  const isOnline = useOnlineStatus();
  console.log(isOnline);
  if (!isOnline) {
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );
  }

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <BodyWrapper className="body">
      <FilterBtnsContainer>
        <SearchInput
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <SearchBtn onClick={handleSearch}>Search</SearchBtn>
        <RatingBtn onClick={handleRatingFilter}>Rating 4+</RatingBtn>
        <RatingBtn onClick={handleResetFilters}>Reset filters</RatingBtn>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          style={{ border: "1px solid" }}
        />
      </FilterBtnsContainer>
      <ResContainer>
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`}>
            {restaurant.info.avgRating < 4.5 ? (
              <PromotedResCard resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </ResContainer>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div``;

const FilterBtnsContainer = styled.div`
  display: ;
  margin: 24px;
`;

const SearchBtn = styled.button`
  background: #f0f0f0;
  padding: 4px 12px;
  margin: 0 12px;
  border-radius: 4px;
`;

const RatingBtn = styled.button`
  background: #f0f0f0;
  padding: 4px 12px;
  margin: 0 12px;
  border-radius: 4px;
`;

const ResContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 0.8fr);
  grid-gap: 20px;
  width: 90%;
  justify-items: center;
`;

const SearchInput = styled.input`
  border: 1px solid;
`;

export default Body;

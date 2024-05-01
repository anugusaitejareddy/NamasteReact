import React from "react";
import RestaurantCard from "../RestaurantCard";
import { RESTAURANTS } from "../../utils/mockData";

const INITIAL_RESTAURANTS = RESTAURANTS;

const Body = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

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
    setRestaurants(restaurants);
    setSearchTerm("");
  }

  function handleSearch() {
    const searchResult = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm)
    );

    setFilteredRestaurants(searchResult);
  }

  return (
    <div className="body">
      <div className="filter-btns">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleRatingFilter}>Rating 4+</button>
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              name={restaurant.info.name}
              cuisine={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              imageId={restaurant.info.cloudinaryImageId}
              costForTwo={restaurant.info.costForTwo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
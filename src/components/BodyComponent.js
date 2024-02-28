import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [buttonClickedCounter, setButtonClickedCounter] = useState(0); // Initialize with 0

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurant(
      jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const filterRestaurants = () => {
    setButtonClickedCounter((prevCounter) => prevCounter + 1); // Increment counter correctly
    console.log(`Button clicked ${buttonClickedCounter} times`);
  };

  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.length > 0 && (
          <RestaurantCard resData={listOfRestaurant[0]?.info} />
        )}
        {listOfRestaurant.slice(1).map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

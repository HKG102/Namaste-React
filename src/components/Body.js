import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  console.log("ren");
  // Local state Variable - Super powerful variable
  let [listOfREstaurants, setListOfRestaurant] = useState([]);
  const [filterRes, setFilterRes]= useState([]);

  //Whenever state cariables update, react triggers a reconciliation cycle(componenet re-rendered)
  const [searchText, setSearchText] = useState("");

  // useEffect callback fucntion called after component is rendered
  useEffect(() => {
    fetchData();
  }, []); // two argument -> callback function and dependency array

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // optional chaining
    const resListData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // console.log(resListData);

    setListOfRestaurant(resListData);
    setFilterRes(resListData);
  };

  //Normal JS variable
  //let listOfREstaurants = resList;

  //Conditional Rendering
  // if(listOfREstaurants.length === 0){
  //     return <Shimmer/>;
  // }

  return listOfREstaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
          />
          <button
            onClick={() => {
              //filter the restraunt cards and update the UI
              console.log(searchText);
              const filterRes = listOfREstaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

              setFilterRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfREstaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated REsstaurants
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

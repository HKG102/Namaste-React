import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/mockData";
import {useState} from "react";



const Body = () => {

    // Local state Variable - Super powerful variable
    let arr = useState(resList);
console.log(arr);
    [listOfREstaurants, setListOfRestaurant] = arr;


    //Normal JS variable
    //let listOfREstaurants = resList;
    
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
                    onClick={()=>{
                        
                        const filteredList = listOfREstaurants.filter((res) => res.data.avgRating > 4);
                        console.log(filteredList);
                        setListOfRestaurant(filteredList);
                    }
                        }>Top Rated REsstaurants
            </button>
            <button className="filter-btn" 
                    onClick={()=>{                      
                        setListOfRestaurant(resList);
                    }
                        }>Reset
            </button>
            </div>
        <div className="res-container">
          {listOfREstaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
  
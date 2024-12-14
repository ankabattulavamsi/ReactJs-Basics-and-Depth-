import { useEffect, useState } from "react";
import CuisinesCard from "./CuisinesCard";
import TopRestInLocal from "./TopRestInLocal";
import OnlineDel from "./OnlineDel";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Body = () => {
  const [cuisinesData, setCuisinesData] = useState([]);
  const [topRestInLocal, setTopRestInLocal] = useState([]);
  const [onlineDelData, setOnlineDelData] = useState([]);
  const [localOnlineTitle, setLocalOnlineTitle] = useState("");
  const [filteredRestData, setFilteredRestData] = useState([]);
  const [searchRest, setSearchRest] = useState("");

  useEffect(() => {
    fetchCuisinesData();
  }, []);

  const fetchCuisinesData = async () => {
    const resp = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5018908&lng=78.3134615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${4}`
    );

    const data = await resp.json();

    setCuisinesData(data.data.cards[0]);
    setTopRestInLocal(data.data.cards[1]);
    setOnlineDelData(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestData(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setLocalOnlineTitle(data.data.cards[2].card.card.title);
  };

  let dishesData = cuisinesData?.card?.card?.imageGridCards?.info;

  let TopRestaurants =
    topRestInLocal?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const getTopRests = () => {
    const topRest = onlineDelData.filter((rat) => rat.info.avgRating > 4.1);
    setOnlineDelData(topRest);
  };

  const getSearchResults = (e) => {
    const filterData = onlineDelData.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchRest.toLowerCase())
    );
    setFilteredRestData(filterData);
  };

  return cuisinesData.length === 0 ? (
    <p>No data is loaded yet</p>
  ) : (
    <div class="px-52 py-8">
      <p class="text-2xl font-semibold">
        {cuisinesData?.card?.card.header.title}
      </p>
      <div class="overflow-x-scroll scrollbar-hide">
        <div class="flex space-x-4 min-w-max">
          {dishesData.map((dish) => (
            <CuisinesCard dishes={dish} key={dish.id} />
          ))}
        </div>
      </div>
      <div class="mt-10 divide-y">
        <hr />
      </div>

      <div class="mt-6">
        <p class="text-2xl font-semibold">
          {topRestInLocal?.card?.card?.header.title}
        </p>
        <div class="overflow-x-scroll scrollbar-hide mt-2">
          <div class="flex space-x-4 min-w-max min-h-max ">
            {TopRestaurants?.map((rest) => (
              <TopRestInLocal restaurants={rest} key={rest.id} />
            ))}
          </div>
        </div>
      </div>
      <div class="mt-10 divide-y">
        <hr />
      </div>

      <div class="mt-6">
        <p class="text-2xl font-semibold">{localOnlineTitle}</p>

        <div class="my-4 flex">
          <button
            onClick={() => getTopRests()}
            class="bg-[#ff5200] px-8 py-2 text-white rounded-md"
          >
            Top rating
          </button>
          <div class="border-2 border-[#ff5200] flex items-center ml-8 rounded-md">
            <input
              // type="search"
              placeholder="search restaurant"
              class="py-2 outline-none pl-2"
              value={searchRest}
              onChange={(e) => setSearchRest(e.target.value)}
            />
            <button
              onClick={(e) => getSearchResults(e)}
              class="bg-[#ff5200] rounded-r-md py-2 px-6 text-white "
            >
              <FiSearch size={24} />
            </button>
          </div>
        </div>

        <div class="flex flex-wrap">
          {filteredRestData?.map((rest) => (
            <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
              <OnlineDel restaurants={rest} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

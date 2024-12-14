import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantRateCard from "./RestaurantRateCard";
import RestOffersCarousel from "./RestOffersCarousel";
import { restDetailUrl } from "../utils/constants";
import { GiCottonFlower } from "react-icons/gi";

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState("");
  const [restaurantRateCard, setRestaurantCard] = useState("");
  const [offersCarousel, setOffersCarousel] = useState([]);
  const [topPicks, setTopPicks] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetchRestDetails();
  });

  const fetchRestDetails = async () => {
    const resp = await fetch(restDetailUrl + id);

    const json = await resp.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.text);
    setRestaurantCard(json?.data?.cards[2]?.card?.card?.info);

    // console.log(
    //   "card-data",
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card
    // );
    setOffersCarousel(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    setTopPicks(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
  };

  console.log("Top picks", topPicks?.carousel);

  return (
    <div class="mx-72 mt-16">
      <h1 class="text-2xl font-bold pb-4">{restaurant}</h1>
      <div class="pt-4">
        <RestaurantRateCard restaurantCard={restaurantRateCard} />
      </div>

      <div class="py-6">
        <h class="text-xl font-bold">Deals for you</h>
        <div class="overflow-x-scroll scrollbar-hide mt-2 ">
          <div class="flex space-x-4 min-w-max min-h-max mt-2 stye-italian">
            {offersCarousel &&
              offersCarousel.map((offersData) => (
                <RestOffersCarousel offersData={offersData} />
              ))}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center ">
        <div class="flex items-center justify-between w-52">
          <GiCottonFlower class="" />
          <h1>Menu</h1>
          <GiCottonFlower />
        </div>
      </div>

      <div>
        <h1 class="font-bold text-xl">{topPicks.title}</h1>
        <div>{/* <p>{topPicks.carousel.title}</p> */}</div>
      </div>
    </div>
  );
};

export default RestaurantDetails;

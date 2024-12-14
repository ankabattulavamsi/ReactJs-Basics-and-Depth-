import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const RestaurantRateCard = (props) => {
  const data = props?.restaurantCard;
  // console.log("props data", data);
  return (
    <div class="shadow-2xl py-6 px-4 rounded-3xl border-2 shadow-indigo-500/50">
      <div class="flex">
        <div class=" bg-green-600 rounded-full  justify-center p-1">
          <FaStar class="" color="white" size={14} />
        </div>

        <p class="pl-2 font-semibold">{data?.avgRatingString}</p>
        <p class="pl-2 font-semibold">({data?.totalRatingsString})</p>
        <li class="pl-2 font-semibold">{data?.costForTwoMessage}</li>
      </div>
      <div class="py-2">
        <p class="text-[#ff5200] underline">{data?.cuisines?.join(", ")}</p>
      </div>

      <div class="relative mt-2">
        <div class="flex items-start mb-4  ">
          <div class="flex flex-col items-center mr-4">
            <div class="w-2 h-2 bg-gray-400 rounded-full "></div>
            <div class="w-0.5 h-8 bg-gray-300 absolute left-[3px] top-2"></div>
          </div>
          <div class="flex items-center space-x-4 justify-center">
            <h3 class="text-sm font-semibold text-gray-700 -mt-1">Outlet</h3>
            <div class="flex items-center">
              <p class="text-sm font-medium text-gray-400">{data?.areaName}</p>
              <MdArrowDropDown size={22} class="text-[#ff5200]" />
            </div>
          </div>
        </div>

        <div className="flex items-start  relative">
          <div className="flex flex-col items-center mr-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full "></div>
          </div>
          <div className="">
            <p className="text-sm text-gray-600 -mt-1">
              {data?.sla?.slaString}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRateCard;

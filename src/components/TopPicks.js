import React from "react";
import { TopPicksUrl } from "../utils/constants";
import { FaRupeeSign } from "react-icons/fa";

const TopPicks = (props) => {
  const data = props?.topPicks;
  // console.log("propsss", data);
  return (
    <div class="relative">
      <img src={TopPicksUrl + data?.creativeId} alt="top-pick" class="" />
      {/* <h1>{data?.title}</h1> */}
      <div class="absolute flex justify-between w-full bottom-10 px-4">
        <p class=" text-white  flex items-center">
          <FaRupeeSign size={14} />
          {data?.dish?.info?.defaultPrice / 100}
        </p>

        <button class=" text-green-500 bg-white  px-10 py-2 rounded-lg font-bold uppercase">
          Add
        </button>
      </div>
    </div>
  );
};

export default TopPicks;

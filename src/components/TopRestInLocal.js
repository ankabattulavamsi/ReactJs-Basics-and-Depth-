import { cloudImageId } from "../utils/constants";
import { FaStar } from "react-icons/fa6";

const TopRestInLocal = (props) => {
  const data = props.restaurants;

  const {
    cloudinaryImageId,
    avgRating,
    name,
    locality,
    cuisines,
    sla,
    aggregatedDiscountInfoV3,
  } = data.info;

  return (
    <div class="py-4">
      <div class="relative w-72 ">
        <img
          src={cloudImageId + cloudinaryImageId}
          class="w-72 h-44 rounded-lg "
        />
        <div class="absolute bottom-0 left-3/6 -translate-x-3/6 bg-black/50 py-2 px-10  w-full saturate-200 backdrop-blur-sm">
          <h1 class="text-white ">
            {aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader}
          </h1>
        </div>
      </div>
      <div class="px-2 pb-2 bg-white shadow-lg rounded-lg w-72">
        <h1 class="text-lg font-bold my-2">{name.slice(0, 20)}</h1>
        <div class="flex flex-cols items-center">
          <div class=" bg-[#ff5200] rounded-full">
            <FaStar class="p-1" color="white" size={18} />
          </div>
          <p class="pl-1">{avgRating + " : " + sla.slaString}</p>
        </div>
        <p class="text-[#02060c] opacity-70 my-2">
          {cuisines.join(", ").slice(0, 16)}
        </p>
        <p class="text-[#02060c] opacity-70">{locality.slice(0, 20)}</p>
      </div>
    </div>
  );
};

export default TopRestInLocal;

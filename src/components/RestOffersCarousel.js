import React from "react";

const RestOffersCarousel = (props) => {
  const data = props?.offersData;
  // console.log("props data---", data);
  const { header, couponCode, offerLogo, description } = data?.info;
  return (
    <div class="flex items-center border-2 p-4 rounded-2xl w-72">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
          offerLogo
        }
        class="w-10"
      />
      <div class="ml-2">
        <h1 class="font-bold text-md">{header}</h1>
        <h1 class="text-gray-900">
          {data?.info?.couponCode == "" ? (
            <p class="text-gray-400 text-sm font-semibold">{description}</p>
          ) : (
            <p class="text-gray-400 text-sm font-semibold">{couponCode}</p>
          )}
        </h1>
        {/* <h1>{couponCode}</h1> */}
      </div>
    </div>
  );
};

export default RestOffersCarousel;

import React from "react";
import { cloudImageId } from "../utils/constants";

const CuisinesCard = (props) => {
  const data = props.dishes;
  const { imageId } = data;
  return (
    <div class="">
      <img class="w-28" src={cloudImageId + imageId} />
    </div>
  );
};

export default CuisinesCard;

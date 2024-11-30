import React from "react";
import { LogoUrl } from "../utils/constants";
import LocationTracker from "./LocationComponent";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <div class="flex w-full flex-wrap items-center justify-between px-20 py-2 bg-white shadow-md ">
      <div class="flex items-center space-x-6">
        <img src={LogoUrl} alt="app-logo" class="w-12 h-12 rounded-xl" />
        <LocationTracker />
      </div>

      <div class="flex self-stretch xl:w-[300px] items-center  ">
        <ImSearch class="text-slate-400 pointer-events-none" />
        <input
          class="focus:ring-0 focus:none xl:w-[300px] focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2  "
          type="text"
          aria-label="Filter projects"
          placeholder="Search For Restaurants..."
        />
      </div>

      <div class="flex  space-x-8">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Cart</p>
        <p>Sign In</p>
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const LocationTracker = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Location services unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          setLocation({
            mainAddress: data.display_name.split(",")[1],
            city: data.address?.city || data.address?.town || "Unknown",
            area:
              data.address?.suburb ||
              data.address?.neighbourhood ||
              "Unknown Area",
          });
        } catch (err) {
          setError("Could not fetch location details");
        }
      },
      () => setError("Location access denied")
    );
  }, []);

  return (
    <div className="pl-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MdLocationPin size={28} color="grey" />
          <div>
            {location ? (
              <>
                <p className="font-bold text-gray-800 text-sm">
                  {location.mainAddress}
                </p>
                <p className="text-xs text-gray-500">
                  {location.area}, {location.city}
                </p>
              </>
            ) : (
              <p className="text-gray-500 animate-pulse">
                Fetching location...
              </p>
            )}
          </div>
        </div>
        <IoIosArrowDown size={28} color="orange" />
      </div>
      {error && <div className="mt-2 text-red-500 text-xs">{error}</div>}
    </div>
  );
};

export default LocationTracker;

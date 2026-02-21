import { Icon } from "@iconify/react";
import React, { useState } from "react";

const RouteStopCard = ({
  destination,
  label,
  lastDestination,
  distance,
  price,
}) => {
  const [toggle, setToggle] = useState(false);

  const buttonToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="p-5 border-b border-b-gray-400 max-h-fit ">
      <button
        onClick={buttonToggle}
        className=" flex w-full   items-center gap-2 "
      >
        <div className="border px-5 p-3 rounded-full bg-blue-600 text-white font-bold ">
          {label}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col   ">
              {lastDestination && (
                <div className="border border-gray-400 w-fit px-1.5 rounded-lg">
                  End
                </div>
              )}
              <div className="font-bold text-xl b flex justify-items-start">
                {destination}
              </div>
            </div>
            <Icon
              icon="majesticons:chevron-down"
              width={25}
              height={25}
              className={`${toggle ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>
      {toggle && (
        <>
          <div  className="flex flex-col pl-15 gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500  ">Distance from previous</span>
              <span className="text-purple-700 bg-purple-300 px-3 p-1 rounded-xl font-semibold">
                {distance}
              </span>
            </div>
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">Fuel cost</span>
              <span className="text-red-700 px-3 p-1 rounded-xl bg-red-300 font-semibold">
                {price}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RouteStopCard;

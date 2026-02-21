import React from "react";

const RouteStartCard = ({startLocation}) => {
  return (
    <div className="flex p-5 gap-2">
      <div className="bg-green-500 font-bold text-white h-fit py-3 px-5 rounded-full  ">
        A
      </div>
      <div className="flex flex-col ">
        <div className="border border-gray-400 w-fit px-2 rounded-lg">
          Start
        </div>
        <div className="text-xl font-bold">{startLocation}</div>
      </div>
    </div>
  );
};

export default RouteStartCard;

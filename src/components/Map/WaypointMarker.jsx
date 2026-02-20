import React from "react";

const WaypointMarker = ({label,color}) => {
  return <div className={` rounded-full max-w-fit py-2 px-4 ${color} text-white`}>
    {label}</div>;
};

export default WaypointMarker;

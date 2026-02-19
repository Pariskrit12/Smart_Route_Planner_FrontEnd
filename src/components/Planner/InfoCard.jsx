import React from "react";

const InfoCard = ({ value = "--", label, textColor = "text-purple-500" }) => {
  return (
    <div className="p-2 w-full rounded-xl  flex flex-col items-center shadow-[0_0_5px_rgba(0,0,0,0.25)]  ">
      <div className={`text-xl font-bold ${textColor}`}>{value}</div>
      <div className="text-sm text-gray-500 text-center mt-1">{label}</div>
    </div>
  );
};

export default InfoCard;

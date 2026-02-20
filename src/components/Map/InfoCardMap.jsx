import React from "react";

const InfoCardMap = ({ label, value, bg_color,text_color }) => {
  return (
    <div
      style={{ backgroundColor: `#${bg_color}`,color:`#${text_color}` }}
      className="flex flex-col shadow-[0_0_5px_rgba(0,0,0,0.25)]   p-5 rounded-xl"
    >
      <div>{label}</div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
};

export default InfoCardMap;

import { Icon } from "@iconify/react";
import React from "react";

const ResultInfoCard = ({ color, icon, value, label, tag }) => {
  return (
    <div className="shadow-[0_0_5px_rgba(0,0,0,0.25)] flex p-5 justify-between rounded-xl">
      <div className="flex flex-col gap-2">
        <Icon
          className="text-xl"
          style={{ color }}
          icon={icon}
          width="30"
          height="30"
        />
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-gray-500">{label}</div>
      </div>
      <div className="bg-gray-300 max-h-fit p-1 px-3 rounded-xl">{tag}</div>
    </div>
  );
};

export default ResultInfoCard;

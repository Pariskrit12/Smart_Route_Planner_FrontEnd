import { Icon } from "@iconify/react";
import React from "react";

const WaypointCard = ({ mainBg_color, bg_color, label, value,border_color }) => {
  return (
    <div
      style={{ backgroundColor: `#${mainBg_color}`,borderColor:`#${border_color}` }}
      className="flex items-center gap-3 border p-2 rounded-xl"
    >
      <Icon icon="lsicon:drag-outline" width="30" height="30" />
      <div
        style={{ backgroundColor: `#${bg_color}` }}
        className=" p-2 px-4 rounded-full  text-white font-bold"
      >
        A
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">{label}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default WaypointCard;

import { Icon } from "@iconify/react";
import React from "react";

const RouteSettingCard = ({children,label,description,icon,color}) => {
  return (
    <div className="px-5 py-10 border rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.25)] border-gray-400">
      <div className="flex items-center gap-2 ">
        <div className=" w-fit rounded-full ">
          <Icon
            className={`${color}`}
            icon={icon}
            width={35}
            height={35}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          <p className="text-xs">{description}</p>
        </div>

      </div>
      <div className="mt-5">
       {children}
      </div>
    </div>
  );
};

export default RouteSettingCard;

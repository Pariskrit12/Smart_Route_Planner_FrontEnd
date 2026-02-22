import { Icon } from "@iconify/react";
import React from "react";

const SettingToggle = ({label,description}) => {
  return (
    <div className="mt-4 border p-2 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.25)] border-gray-400">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 ">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{label}</span>
            <Icon
              icon="material-symbols-light:info-outline"
              width={20}
              height={20}
            />
          </div>
          <p className="text-xs">{description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer shrink-0">
          <input type="checkbox" className="sr-only peer" />

          <div className="
            w-10 h-5 rounded-full bg-gray-300
            peer-checked:bg-black
            transition-colors duration-200
          "></div>

          <div className="
            absolute left-0.5 top-0.5
            w-4 h-4 bg-white rounded-full
            shadow-md
            transition-transform duration-200
            peer-checked:translate-x-5
          "></div>
        </label>
      </div>
    </div>
  );
};

export default SettingToggle;

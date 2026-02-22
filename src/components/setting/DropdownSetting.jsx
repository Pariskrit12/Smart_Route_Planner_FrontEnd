import { Icon } from "@iconify/react";
import React, { useState } from "react";

const DropdownSetting = ({ options, value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
 
      <div className="flex items-center gap-1 text-sm text-gray-700">
        <span className="font-medium">Optimization Property</span>
        <Icon icon="material-symbols-light:info-outline" width={18} />
      </div>

  
      <div className="relative w-full">
        <button
          onClick={() => setOpen(prev => !prev)}
          className="w-full flex justify-between items-center text-sm border px-3 py-2 rounded-lg border-gray-400 bg-gray-100 hover:bg-gray-200 transition"
        >
          <span className="truncate">{value}</span>
          <Icon icon="lsicon:down-outline" width={18} />
        </button>

        
        {open && (
          <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
            {options.map((elem, index) => (
              <div
                key={index}
                onClick={() => {
                  setValue(elem.label);
                  setOpen(false);
                }}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2 text-sm"
              >
                <Icon
                  className="text-blue-600 shrink-0"
                  icon={elem.icon}
                  width={18}
                />
                <span className="whitespace-nowrap">{elem.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSetting;
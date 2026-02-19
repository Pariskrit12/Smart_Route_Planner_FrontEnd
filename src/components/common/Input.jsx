import { Icon } from "@iconify/react";
import React from "react";

const Input = ({label,icon,placeholder}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      <div className="flex items-center gap-2  p-3 rounded-xl bg-gray-200">
        <Icon icon={icon} width={30} height={30} />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none"
        />
      </div>
    </div>
  );
};

export default Input;

import { Icon } from "@iconify/react";
import React from "react";

const Input = ({ label, icon, placeholder, value, onChange, type }) => {
  return (
    <div className="flex flex-col gap-2">
       {label && <label className="font-bold">{label}</label>}
      <div className="flex items-center gap-2  p-3 rounded-xl bg-gray-200">
           {icon && <Icon icon={icon} width={20} height={20} />}
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none"
          value={value}
          onChange={onChange}
          {...(type === "number" ? { min: -100, max: 100, step: 1 } : {})}
        />
      </div>
    </div>
  );
};

export default Input;

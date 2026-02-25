import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Input = ({ label, placeholder, type, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const actualType =
    type === "password" ? (showPassword ? "text" : "password") : type;
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <div className="border rounded-lg p-2 border-gray-300 flex items-center gap-2 justify-between  ">
        <input
          onChange={onChange}
          className="outline-none bg-amber-300  "
          type={actualType}
          placeholder={placeholder}
          value={value}
        />
        {type === "password" && (
          <Icon
            icon={`${showPassword ? "solar:eye-outline" : "formkit:eyeclosed"}`}
            width={22}
            height={22}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

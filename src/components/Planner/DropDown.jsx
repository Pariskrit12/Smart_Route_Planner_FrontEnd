import React from "react";

const DropDown = ({ vehicleOptions, value, onChange, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">{label}</div>
      <select
        name="Vehicle Type"
        value={value}
        onChange={onChange}
        className="p-3  bg-gray-200 rounded-xl outline-none w-full"
      >
        <option value="" disabled>
          Vehicle Type
        </option>
        {vehicleOptions.map((elem, index) => (
          <option value={elem.value} key={index}>
            {elem.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

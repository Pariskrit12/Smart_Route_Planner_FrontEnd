import React from "react";

const DropDown = ({ vehicleOptions, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-3  bg-gray-200 rounded-xl outline-none"
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
  );
};

export default DropDown;

import { Icon } from "@iconify/react";
import React from "react";

const FeatureCard = ({
  bg_color,
  iconColor,
  icon,
  featureName,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl flex flex-col items-center p-5 shadow-[0_0_5px_rgba(0,0,0,0.25)]  ">
      <div
        style={{ backgroundColor: `#${bg_color}` }}
        className=" rounded-full p-2 inline-flex "
      >
        <Icon icon={`${icon}`} width="30" height="30" color={`${iconColor}`} />
      </div>
      <h2 className="text-2xl font-bold">{featureName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;

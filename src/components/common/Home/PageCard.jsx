import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";

const PageCard = ({
  icon,
  pageTitle,
  pageDescription,
  linkToPage,
  features,
  iconColor,
  bg_color,
  hoverColor,
  to,
}) => {
  return (
    <div className="flex item-center gap-5 px-6 py-5 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.25)] ">
      <div>
        <Icon icon={icon} width={40} height={40} color={iconColor} />
      </div>
      <div className="flex flex-col gap-10  ">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{pageTitle}</h2>
          <p>{pageDescription}</p>
        </div>
        <div>
          <ul className="list-disc pl-5">
            {features.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div
          style={{ backgroundColor: `#${bg_color}` }}
          className="flex items-center text-white  p-1 justify-evenly rounded-lg xs:w-62.5  "
        >
          <LinkButton name={linkToPage} pageLink={to} />
          <Icon icon="tabler:arrow-right" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default PageCard;

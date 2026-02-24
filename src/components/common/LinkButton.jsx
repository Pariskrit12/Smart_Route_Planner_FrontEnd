import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const LinkButton = ({ pageLink, name, className = " ", icon }) => {
  return (
    <div className={`flex items-center gap-2  ${className}`}>
      <Link to={pageLink}>{name}</Link>

      {icon && <Icon icon={icon} height={20} width={20} />}
    </div>
  );
};

export default LinkButton;

import React from "react";
import { SidebarOptionWrapper } from "./SidebarOption.styled";

const SidebarOption = ({ title, Icon }) => {
  return (
    <SidebarOptionWrapper>
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionWrapper>
  );
};

export default SidebarOption;

import React from "react";
import { BodyWrapper } from "./Body.style";
import Header from "../Header/Header";

const Body = ({ spotify }) => {
  return (
    <BodyWrapper>
      <Header spotify={spotify} />
    </BodyWrapper>
  );
};

export default Body;

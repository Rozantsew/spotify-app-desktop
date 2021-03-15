import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { PlayerWrapper } from "./Player.style";

const Player = ({ spotify }) => {
  return (
    <PlayerWrapper>
      <Sidebar />
      <Body />

      <Footer />
    </PlayerWrapper>
  );
};

export default Player;

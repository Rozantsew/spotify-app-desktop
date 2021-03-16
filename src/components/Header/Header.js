import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  HeaderLeftWrapper,
  HeaderWrapper,
  HeaderWrapperRight,
} from "./Header.styled";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../context/playerContext";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <HeaderWrapper>
      <HeaderLeftWrapper>
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" type="text" />
      </HeaderLeftWrapper>
      <HeaderWrapperRight>
        <Avatar src={user?.images[0]?.url} alt="User Name" />
        <h4>{user?.display_name}</h4>
      </HeaderWrapperRight>
    </HeaderWrapper>
  );
};

export default Header;

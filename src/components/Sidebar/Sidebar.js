import React from "react";
import {
  OptionWrapper,
  PlaylistTitle,
  SidebarLogo,
  SidebarWrapper,
} from "./Sidebar.style";
import SidebarOption from "../SideBarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../../context/playerContext";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <SidebarWrapper>
      <SidebarLogo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <OptionWrapper>
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      </OptionWrapper>
      <PlaylistTitle>PLAYLISTS</PlaylistTitle>

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

      <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="Rnb" />
    </SidebarWrapper>
  );
};

export default Sidebar;

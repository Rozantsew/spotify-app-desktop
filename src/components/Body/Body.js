import React from "react";
import {
  BodyInfo,
  BodyWrapper,
  HeroIconWrapper,
  HeroPlaylistWrapper,
  PlayButtonWrapper,
  PlaylistBanner,
  SongListWrapper,
} from "./Body.style";
import Header from "../Header/Header";
import { useStateValue } from "../../context/playerContext";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue();

  return (
    <BodyWrapper>
      <Header spotify={spotify} />
      <HeroPlaylistWrapper>
        <PlaylistBanner
          src={discover_weekly?.images[0].url}
          alt="Banner playlist"
        />
        <BodyInfo>
          <h4>PLAYLIST</h4>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </BodyInfo>
      </HeroPlaylistWrapper>

      <HeroIconWrapper>
        <PlayButtonWrapper>
          <PlayCircleFilledIcon />
        </PlayButtonWrapper>
        <FavoriteIcon />
        <MoreHorizIcon />
      </HeroIconWrapper>
      <SongListWrapper>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </SongListWrapper>
    </BodyWrapper>
  );
};

export default Body;

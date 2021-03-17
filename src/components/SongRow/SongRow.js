import React from "react";
import { SongRowAlbum, SongRowInfo, StyledSongRow } from "./SongRow.styled";

const SongRow = ({ track }) => {
  return (
    <StyledSongRow>
      <SongRowAlbum src={track.album.images[0].url} alt="song image" />
      <SongRowInfo>
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => artist.name)}
          {track.album.name}
        </p>
      </SongRowInfo>
    </StyledSongRow>
  );
};

export default SongRow;

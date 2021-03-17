import styled from "styled-components";

export const StyledSongRow = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
`;

export const SongRowInfo = styled.div`
  margin-left: 20px;
  text-align: left;

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;

export const SongRowAlbum = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

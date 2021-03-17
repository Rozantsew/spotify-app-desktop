import styled from "styled-components";

export const BodyWrapper = styled.div`
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  overflow-y: overlay;
  padding: 30px;
  height: 100vh;
  color: white;
  flex: 0.8;
`;

export const HeroPlaylistWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

export const PlaylistBanner = styled.img`
  max-width: 192px;
  height: 20vh;
  margin: 0px 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  object-fit: contain;
`;

export const BodyInfo = styled.div`
  padding: 10px;
  text-align: left;
  flex: 1;

  p {
    font-weight: bold;
    font-size: 14px;
  }

  h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }
`;

export const HeroIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .MuiSvgIcon-root {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const PlayButtonWrapper = styled.div`
  .MuiSvgIcon-root {
    font-size: 80px !important;
    margin: 20px 20px 20px 30px;
  }
  .MuiSvgIcon-root:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`;

export const SongListWrapper = styled.div``;

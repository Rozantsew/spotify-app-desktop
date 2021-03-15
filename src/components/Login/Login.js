import React from "react";
import { LoginWrapper, StyledButton, StyledLogo } from "./Login.style";
import { loginUrl } from "../Spotify/Spotify";

const Login = () => {
  return (
    <LoginWrapper>
      <StyledLogo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo"
      />
      <StyledButton href={loginUrl}>LOGIN WI TH SPOTIFY</StyledButton>
    </LoginWrapper>
  );
};

export default Login;

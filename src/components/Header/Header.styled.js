import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`;

export const HeaderLeftWrapper = styled.div`
  background-color: white;
  min-width: 80px;
  max-width: 200px;
  color: gray;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  flex: 0.5;

  input {
    border: none;
    width: 100%;
  }
`;

export const HeaderWrapperRight = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
  }
`;

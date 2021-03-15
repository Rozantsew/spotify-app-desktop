import styled from "styled-components";

export const SidebarOptionWrapper = styled.div`
  color: grey;
  height: 40px;
  cursor: pointer;
  text-align: left;
  transition: 200ms color ease-in;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: white;
  }

  p,
  h4 {
    margin-left: 15px;
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 120px;
  }
`;

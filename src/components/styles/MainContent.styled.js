import styled from "styled-components";

export const StyledMainContent = styled.main`
  background-color: #ffffff;
  border-radius: 25px;
  position: relative;
  max-width: 920px;
  height: 480px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    border-radius: 25px 25px 0 0;
    min-width: 280px;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

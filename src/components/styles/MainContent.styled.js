import styled from "styled-components";

export const StyledMainContent = styled.main`
  background-color: #ffffff;
  border-radius: 25px;
  position: relative;
  max-width: 920px;
  height: 480px;
  margin: auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 240px;
  @media (max-width: 600px) {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    min-width: 280px;
    width: 100%;
    height: 800px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  }
`;

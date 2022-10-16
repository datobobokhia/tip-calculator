import styled from "styled-components";

export const StyledMainContent = styled.main`
  margin-top: 40px;
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  @media (max-width: 480px) {
    min-width: 280px;
    width: 100%;
    height: 800px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

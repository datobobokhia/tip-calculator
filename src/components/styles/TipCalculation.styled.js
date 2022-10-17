import styled from "styled-components";

export const StyledTipCalculation = styled.section`
  width: 41%;
  background-color: #00474b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 395px;
  @media (max-width: 600px) {
    width: 80%;
    height: 255px;
    position: absolute;
    top: 520px;
  }
`;

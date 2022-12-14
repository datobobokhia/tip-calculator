import styled from "styled-components";

export const StyledTipAmount = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  h2,
  p,
  span {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
  }
  h2 {
    font-size: 32px;
    line-height: 47px;
    color: #26c2ae;
    margin: 0px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin: 0px;
  }
  span {
    color: #7f9d9f;
    font-size: 13px;
    line-height: 19px;
  }

  @media (max-width: 600px) {
    height: auto;
    align-items: center;
  }
`;

import styled from "styled-components";

export const StyledTipInput = styled.div`
  height: 250px;
  p {
    font-family: "Space Mono";
    font-size: 16px;
    line-height: 23.7px;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 16.5px;
    height: auto;
  }
  input,
  button {
    border: 0px;
    min-width: 100px;
    font-family: "Space Mono";
    font-size: 24px;
    border-radius: 5px;
    line-height: 35.54px;
  }
  input {
    text-align: end;
    outline-color: #26c2ae;
    padding-right: 15px;
    padding-left: 15px;
  }
  button {
    height: 48px;
    background-color: #00474b;
    color: #ffffff;
  }
`;

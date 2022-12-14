import styled from "styled-components";

export const StyledNumOfPeople = styled.div`
  width: 100%;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    font-family: "Space Mono";
    font-size: 16px;
    line-height: 23.7px;
  }
  input {
    width: 100%;
    border: 0px;
    outline-color: #26c2ae;
    height: 48px;
    text-align: end;
    font-family: "Space Mono";
    font-size: 24px;
    border-radius: 5px;
    line-height: 35.54px;
    padding-right: 15px;
    background-image: url("/assets/photo/icon-person.svg");
    background-repeat: no-repeat;
    background-position: 5%;
    padding-left: 30px;
  }
`;

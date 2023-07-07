import styled from "styled-components";

export const StyledResetButton = styled.div`
  text-align: center;
  button {
    background-color: #26c2ae;
    width: 80%;
    height: 48px;
    border: 0px;
    border-radius: 5px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    cursor: ${(props) => (props.buttonColors ? "pointer" : "auto")};
  }
  button:hover {
    background-color: #9fe6df;
  }
`;

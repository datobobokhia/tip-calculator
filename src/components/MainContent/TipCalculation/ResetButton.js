import { StyledResetButton } from "../../styles/ResetButton.styled";

export default function ResetButton({ handleResetButton, buttonColors }) {
  return (
    <StyledResetButton buttonColors={buttonColors}>
      <button
        onClick={handleResetButton}
        style={{ backgroundColor: buttonColors ? "#26c2ae" : "#0d686d" }}
      >
        Reset
      </button>
    </StyledResetButton>
  );
}

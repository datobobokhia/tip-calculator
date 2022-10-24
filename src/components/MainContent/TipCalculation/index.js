import { StyledTipCalculation } from "../../styles/TipCalculation.styled";
import TipAmount from "./TipAmount";
import TotalAmount from "./TotalAmount";
import ResetButton from "./ResetButton";

export default function TipCalculation({
  tipAmount,
  totalAmount,
  handleResetButton,
  buttonColors,
}) {
  return (
    <StyledTipCalculation>
      <TipAmount tipAmount={tipAmount} />
      <TotalAmount totalAmount={totalAmount} />
      <ResetButton
        handleResetButton={handleResetButton}
        buttonColors={buttonColors}
      />
    </StyledTipCalculation>
  );
}

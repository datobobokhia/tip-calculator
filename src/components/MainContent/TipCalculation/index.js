import { StyledTipCalculation } from "../../styles/TipCalculation.styled";
import TipAmount from "./TipAmount";
import TotalAmount from "./TotalAmount";
import ResetButton from "./ResetButton";

export default function TipCalculation() {
  return (
    <StyledTipCalculation>
      <TipAmount />
      <TotalAmount />
      <ResetButton />
    </StyledTipCalculation>
  );
}

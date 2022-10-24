import { StyledTipAmount } from "../../styles/TipAmount.styled";
export default function TipAmount({ tipAmount }) {
  return (
    <StyledTipAmount>
      <div>
        <p>Tip Amount</p>
        <span>/ person</span>
      </div>
      <h2>$ {tipAmount}</h2>
    </StyledTipAmount>
  );
}

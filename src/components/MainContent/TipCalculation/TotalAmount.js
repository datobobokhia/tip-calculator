import { StyledTotalAmount } from "../../styles/TotalAmount.styled";
export default function TotalAmount() {
  return (
    <StyledTotalAmount>
      <div>
        <p>Total</p>
        <span>/ person</span>
      </div>
      <h2>$32.79</h2>
    </StyledTotalAmount>
  );
}

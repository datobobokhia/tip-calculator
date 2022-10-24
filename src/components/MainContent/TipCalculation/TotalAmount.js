import { StyledTotalAmount } from "../../styles/TotalAmount.styled";
export default function TotalAmount({ totalAmount }) {
  return (
    <StyledTotalAmount>
      <div>
        <p>Total</p>
        <span>/ person</span>
      </div>
      <h2>$ {totalAmount}</h2>
    </StyledTotalAmount>
  );
}

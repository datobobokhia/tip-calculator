import { StyledBillInput } from "../../styles/BillInput.styled";
export default function BillInput() {
  return (
    <StyledBillInput>
      <p>Bill</p>
      <input type={"number"} min="0" placeholder="0" />
    </StyledBillInput>
  );
}

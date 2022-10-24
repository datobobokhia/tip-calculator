import { StyledBillInput } from "../../styles/BillInput.styled";

export default function BillInput({ handleBillChange, bill }) {
  return (
    <StyledBillInput>
      <p>Bill</p>
      <input
        type={"number"}
        min="0"
        placeholder="0"
        onChange={handleBillChange}
        value={bill}
      />
    </StyledBillInput>
  );
}

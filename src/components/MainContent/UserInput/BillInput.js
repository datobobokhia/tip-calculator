import { StyledBillInput } from "../../styles/BillInput.styled";

export default function BillInput({ handleBillChange, bill }) {
  return (
    <StyledBillInput>
      <div>
        <p>Bill</p>
        <p style={{ textAlign: "right", color: "#e17052" }}>
          {bill >= 10000 ? "Use numbers below 10,000" : ""}
        </p>
      </div>
      <input
        style={{ outlineColor: bill >= 10000 ? "#e17052" : "#26c2ae" }}
        maxLength={9}
        type={"number"}
        min="0"
        placeholder="0"
        onChange={handleBillChange}
        value={bill >= 10000 ? "" : bill}
      />
    </StyledBillInput>
  );
}

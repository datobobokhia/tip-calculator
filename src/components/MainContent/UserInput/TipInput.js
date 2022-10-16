import { StyledTipInput } from "../../styles/TipInput.styled";
export default function TipInput() {
  return (
    <StyledTipInput>
      <p>Select Tip %</p>
      <div>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type={"number"} min="0" placeholder="Custom" />
      </div>
    </StyledTipInput>
  );
}

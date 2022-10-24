import { StyledTipInput } from "../../styles/TipInput.styled";
export default function TipInput({ handleTipChange, tipButtonColor, tip }) {
  const myTip = [5, 10, 15, 20, 50];

  return (
    <StyledTipInput>
      <p>Select Tip %</p>
      <div>
        {myTip.map((myTip, index) => {
          return (
            <button
              type={"button"}
              onClick={handleTipChange}
              value={myTip}
              key={index}
            >
              {myTip}%
            </button>
          );
        })}
        <input
          type={"number"}
          min="0"
          placeholder="Custom"
          onChange={handleTipChange}
          value={tip}
        />
      </div>
    </StyledTipInput>
  );
}

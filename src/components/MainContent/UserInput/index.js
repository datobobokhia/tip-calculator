import { StyledUserInput } from "../../styles/UserInput.styled";
import BillInput from "./BillInput";
import TipInput from "./TipInput";
import NumOfPeople from "./NumOfPeople";

export default function UserInput({
  handleBillChange,
  handleTipChange,
  handlePeopleNumChange,
  tipButtonColor,
  bill,
  tip,
  people,
  nonZeroElement,
}) {
  return (
    <StyledUserInput>
      <BillInput handleBillChange={handleBillChange} bill={bill} />
      <TipInput
        handleTipChange={handleTipChange}
        tipButtonColor={tipButtonColor}
        tip={tip}
      />
      <NumOfPeople
        handlePeopleNumChange={handlePeopleNumChange}
        people={people}
        nonZeroElement={nonZeroElement}
      />
    </StyledUserInput>
  );
}

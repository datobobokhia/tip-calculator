import { StyledUserInput } from "../../styles/UserInput.styled";
import BillInput from "./BillInput";
import TipInput from "./TipInput";
import NumOfPeople from "./NumOfPeople";
export default function UserInput() {
  return (
    <StyledUserInput>
      <BillInput />
      <TipInput />
      <NumOfPeople />
    </StyledUserInput>
  );
}

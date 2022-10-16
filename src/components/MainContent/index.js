import { StyledMainContent } from "../styles/MainContent.styled";
import UserInput from "./UserInput";
import TipCalculation from "./TipCalculation";
export default function MainContent() {
  return (
    <StyledMainContent>
      <UserInput />
      <TipCalculation />
    </StyledMainContent>
  );
}

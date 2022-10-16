import { StyledNumOfPeople } from "../../styles/NumOfPeople.styled";

export default function NumOfPeople() {
  return (
    <StyledNumOfPeople>
      <p>Number of People</p>
      <input type={"number"} min="0" placeholder="0" />
    </StyledNumOfPeople>
  );
}

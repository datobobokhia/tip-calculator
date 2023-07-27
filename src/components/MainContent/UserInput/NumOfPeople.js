import { StyledNumOfPeople } from "../../styles/NumOfPeople.styled";

export default function NumOfPeople({
  handlePeopleNumChange,
  people,
  nonZeroElement,
}) {
  return (
    <StyledNumOfPeople>
      <div>
        <p>Number of People</p>
        <p style={{ textAlign: "right", color: "#e17052" }}>
          {nonZeroElement ? "Can't be zero" : ""}
        </p>
      </div>

      <input
        style={{ outlineColor: nonZeroElement ? "#e17052" : "#26c2ae" }}
        type={"number"}
        min="0"
        placeholder="0"
        onChange={handlePeopleNumChange}
        value={people}
      />
    </StyledNumOfPeople>
  );
}

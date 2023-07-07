import { StyledMainContent } from "../styles/MainContent.styled";
import UserInput from "./UserInput";
import TipCalculation from "./TipCalculation";
import { useState, useEffect } from "react";

export default function MainContent() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [buttonColors, setButtonColors] = useState("");
  const [nonZeroElement, setNonZeroElement] = useState(false);

  const handleBillChange = (event) => {
    setBill(event.target.value);
    setButtonColors(true);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
    setButtonColors(true);
  };

  const handlePeopleNumChange = (event) => {
    if (event.target.value <= 0) {
      setNonZeroElement(true);
    } else {
      setNonZeroElement(false);
    }
    setPeople(event.target.value);
    setButtonColors(true);
    if (event.target.value === "") {
      setNonZeroElement(false);
    }
  };

  const handleResetButton = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTipAmount(0);
    setTotalAmount(0);
    setButtonColors(false);
    setNonZeroElement(false);
  };

  useEffect(() => {
    if (bill > 0 && bill < 10000 && people > 0 && tip > 0) {
      setTipAmount(Math.round(((bill * tip) / 100 / people) * 100) / 100);
      setTotalAmount(
        Math.round(
          ((Number(bill) + Number((bill * tip) / 100)) / people) * 100
        ) / 100
      );
    }
  }, [bill, tip, people]);

  return (
    <StyledMainContent>
      <UserInput
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        handlePeopleNumChange={handlePeopleNumChange}
        bill={bill}
        tip={tip}
        people={people}
        nonZeroElement={nonZeroElement}
        // tipButtonColor={tipButtonColor}
      />
      <TipCalculation
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        handleResetButton={handleResetButton}
        buttonColors={buttonColors}
      />
    </StyledMainContent>
  );
}

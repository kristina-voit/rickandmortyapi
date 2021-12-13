import styled from "styled-components";
import { useState } from "react";

function Button({ onClickEvent }) {
  function toggleButton() {
    setConstToggle(!constToggle);
  }

  const [constToggle, setConstToggle] = useState(false);

  const Buttontext = constToggle ? "Show less" : "Show more!";

  return (
    <Buttonstyled
      onClick={() => {
        onClickEvent();
        toggleButton();
      }}
    >
      {Buttontext}
    </Buttonstyled>
  );
}

const Buttonstyled = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.331);
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;

export default Button;

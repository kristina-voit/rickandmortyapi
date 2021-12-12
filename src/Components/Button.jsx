import styled from "styled-components";
import { useState } from "react";

function Button({ onClickEvent }) {
  function toggleButton() {
    setConstToggle(!constToggle);
  }

  const [constToggle, setConstToggle] = useState(false);

  const Buttontext = constToggle ? "Show less" : "Show more!";

  return (
    <button
      onClick={() => {
        onClickEvent();
        toggleButton();
      }}
    >
      {Buttontext}
    </button>
  );
}

export default Button;

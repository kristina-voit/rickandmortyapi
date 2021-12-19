import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";

function CardEpisode({
  name,
  air_date,
  episode_no,
  episode,
  characters,
}) {
  function Content() {
    return (
      <>
        <br></br>
        <div>Air Date: {air_date}</div>
        <div>Characters: {characters}</div>
      </>
    );
  }

  function toggleContent() {
    setContentVisibility(!contentVisibility);
  }
  const [contentVisibility, setContentVisibility] = useState(false);

  return (
    <section>
      <Carddesign>
        <br></br>
        <Speciesdesign>{episode_no}</Speciesdesign>
        
        <br></br><Namedesign>{name}</Namedesign>
        <div>
          <Button onClickEvent={toggleContent} />
        </div>
        {contentVisibility && <Content />}
      </Carddesign>
    </section>
  );
}

export default CardEpisode;

const Carddesign = styled.div`
  border: 1px solid rgb(2, 0, 36);
  border-radius: 10px 0 50px 0;
  box-shadow: 15px 15px 20px rgb(2, 0, 36);
  margin: 10rem;
  padding-bottom: 1rem;
  max-width: 600px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    153deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 23%,
    rgba(0, 212, 255, 1) 100%
  );
  &:hover {
    background: rgb(131, 58, 180);
    background: linear-gradient(
      135deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 36%,
      rgba(252, 176, 69, 1) 83%
    );
  }
`;

const Namedesign = styled.div`
font-family: fantasy;
  font-size: 2rem;
  color: white;
`;

const Speciesdesign = styled.div`
  color: #11c92d;
`;

const Imagedesign = styled.img`
  border-radius: 10%;
`;
const Star = styled.span`
  cursor: pointer;
  font-size: 2rem;
`;

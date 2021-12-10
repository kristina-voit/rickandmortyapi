import styled from "styled-components";
function Card({name, species, image}) {
    
   

    return (
    <section>
        <Carddesign>
            <Namedesign>{name}</Namedesign>
            <div>{species}</div>
            <Imagedesign src={image}/>
        </Carddesign>
    </section>)
}
   
  export default Card

  const Carddesign = styled.div`
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 10px black;
    margin: 2rem;
    padding-bottom: 1rem;
    background-color: rgba(250, 128, 114, 0.557);

    &:hover {
    background-color: green;
  }
    `;



  const Namedesign = styled.div`
    font-size: 2rem;  
  `

const Imagedesign = styled.img`
    border-radius: 10px;
     
`

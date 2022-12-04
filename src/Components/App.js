import styled from 'styled-components';
import Card from './Card'
import Cards from './Questoes'
import Footer from "./Footer";
import { useState} from "react"

export default function App() {
  const [contador, setCount] = useState(0);

  return (
    <Screencontainer> 
      <Card  data-test="flashcard" card={Cards}
              contador={contador}
              setCount={setCount} />
      <Footer 
              contador={contador}
              setCount={setCount} />
    </Screencontainer>
 );
}

const Screencontainer = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

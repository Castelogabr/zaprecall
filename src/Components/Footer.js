import styled from "styled-components";
import questions from "./Questoes";
export default function Footer({contador}){
    return(
        <FooterContainer data-test="footer" >
              <p> {contador}/{questions.length} CONCLUÍDOS</p>
            </FooterContainer>
    )
}

const FooterContainer = styled.div`
  width: 100%;
  font-family: 'Recursive';
  background-color: #FFFFFF;
  font-size: 18px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

import seta_play from "../assets/img/seta_play.png";
import styled from "styled-components";
import seta_virar from "../assets/img/seta_virar.png";
import icone_certo from "../assets/img/icone_certo.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_quase from "../assets/img/icone_quase.png";
import { useState } from "react";




export default function FlashCard({ numero, question, answer, setCount, contador }) {
    const [fechada, setFechada] = useState(true);
    const [pergunta, setPergunta] = useState("");
    const [finalizada, setFinalizada] = useState("");
    const [resposta, setResposta] = useState("");
    const [img, setImg] = useState(seta_play);


    
    function abrirCard() {
        setPergunta(true);
        setFechada(false);
    }

    function abrirResposta() {
        setPergunta(false);
        setResposta(true);
    }

    function Fechar(event) {
        setResposta(false);
        setFinalizada(true);
        if (event === "esqueci") {
            setImg(icone_erro)
        }
        if (event === "quase esqueci") {
            setImg(icone_quase);

        }
        if (event === "zap") {
            setImg(icone_certo);
        }

    count()
    }

    function count(){
        setCount(contador +1)
    }


    return (
<>
            {fechada && <Pergunta  data-test="flashcard-text">
                <p>Pergunta {numero}</p>
                <img data-test="play-btn" src={seta_play} alt="seta play"
                    onClick={() => abrirCard()}
                />
            </Pergunta>}
            {pergunta && <Cards  data-test="flashcard-text">
                <img  data-test="turn-btn" src={seta_virar} onClick={() => abrirResposta()} alt="seta virar" />
                <p>{question}</p>
            </Cards>}
            {resposta && <Resposta  data-test="flashcard-text">
                {answer}

                <StyledButtons>
                    <Option data-test="no-btn"  event="RED" onClick={() => Fechar("esqueci")}>Não lembrei</Option>
                    <Option data-test="partial-btn" event="ORANGE" onClick={() => Fechar("quase esqueci")}>Quase não lembrei</Option>
                    <Option data-test="zap-btn" event="GREEN" onClick={() => Fechar("zap")}>Zap!</Option>
                </StyledButtons>
            </Resposta>}
            {finalizada && <Respondida data-test="flashcard-text">
                <p >Pergunta {numero}</p>
                <img 
                 data-test="no-btn" 
                 data-test="partial-btn"
                 src={img} alt="" />
            </Respondida>}

</>
            )
}

const Respondida = styled.div`
 width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    p {
    text-decoration: line-through;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  
  }

`

const Pergunta = styled.div`
 width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
    }
`

const Cards = styled.div`
    width: 300px;
  margin: 12px;
  padding: 15px;
  background: #ffffd4;
  border-radius: 5px;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`

const Resposta = styled.div`
   width: 300px;
  margin: 12px;
  padding: 15px;
  background: #ffffd4;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const StyledButtons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const Option = styled.div`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.event};
  border-radius: 5px;
  border: 1px ${props => props.event} ;
  padding:5px;
  margin: 3px
`


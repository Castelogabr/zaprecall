import styled from "styled-components";
import logo from "../assets/img/logo.png"


export default function Logo() {
    return (
        <CaixaLogo>
            <img src={logo} alt="zaprecall" />
            <h1> ZapRecall</h1>
        </CaixaLogo>
    )
}


const CaixaLogo = styled.div` 
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
    width: 52px;
    }
    h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
   `
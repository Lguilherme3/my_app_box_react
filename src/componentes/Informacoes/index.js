import styled from "styled-components";
import Whatsappicon from "../../imagens/whatsappicon.png";
import Envioicon from "../../imagens/envioicon.png";
import Cartaoicon from "../../imagens/cartaoicon.png";

const Infos = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  img {
    flex-direction: column;
    justify-content: center;
  }

  .container--infos {
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 200px;
    height: 100px;
    background-color: #f1f1f1;
    align-items: center;
    margin-top: 32px;
    padding: 6px;
    border-radius: 10px 0px;
    font-size: 14px;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Informacoes() {
  return (
    <Infos>
      <div class="container--infos">
        <img src={Whatsappicon} />
        <p>
          <strong>Dúvidas?</strong>
          <br />
          Fale com a <br />
          gente pelo <br />
          Whatsapp!
        </p>
      </div>
      <div class="container--infos">
        <img src={Envioicon} />
        <p>
          <strong>Envio rápido</strong>
          <br />
          Seu pedido <br />
          chega <br />
          rapidinho!
        </p>
      </div>
      <div class="container--infos">
        <img src={Cartaoicon} />
        <p>
          <strong>Desconto no Pix!</strong>
          <br />
          Compre com <br />
          cratão de <br />
          crédito boleto <br />
          ou PIX
        </p>
      </div>
    </Infos>
  );
}

export default Informacoes;

import styled from "styled-components";
import Produto1 from "../../imagens/caneca1.png";
import Produto2 from "../../imagens/caneca2.png";

const Produtos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1000px;
  margin: 32px auto;

  img {
    width: 300px;
    border-bottom: 6px solid #9c9797;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    width: 300px;

    img {
      width: 250px;
    }
  }
`;

const InfoEPreco = styled.div`

text-align: center;
color: #9c9797;

strong {
    color: black;
}
`

function Canecas() {
  return (
    <Produtos>
      <InfoEPreco>
        <img src={Produto1} />
        <p>Caneca minimalista branca</p>
        <p><strong>R$ 34,99</strong></p>
      </InfoEPreco>

      <InfoEPreco>
        <img src={Produto2} />
        <p>Caneca minimalista preta</p>
        <p><strong>R$ 34,99</strong></p>
      </InfoEPreco>
    </Produtos>
  );
}

export default Canecas;

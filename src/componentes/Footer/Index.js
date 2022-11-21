import styled from "styled-components";
import LogoBranco from "../../imagens/LogoHomeBranco.png";

const Rodape = styled.footer`

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #9c9797;
  height: 80px;

  p {
    color: white;
    border: 1px solid white;
    border-radius: 50px;
    padding: 8px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  span {
    margin-right: 6px;
  }

  img {
    width: 100px;
  }

  @media screen and (max-width: 760px) {
    img {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <Rodape>
      <p>
        <span class="material-symbols-outlined">favorite</span>
        desenvolvido por Carvalho Pereira
      </p>
      <img src={LogoBranco} />
    </Rodape>
  );
}

export default Footer;

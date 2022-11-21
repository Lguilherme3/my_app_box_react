import styled from "styled-components";
import logo from "../../imagens/LogoHomePreto.png";
import iconFace from "../../imagens/iconeface.png";
import iconInsta from "../../imagens/iconeinsta.png";
import Search from "../Search/Index";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px 5px;
  box-shadow: 1px 1px 2px 0px #00000033;
  

  #icons,
  #iconeface,
  #iconeinsta {
    margin-right: 6px;
  }

  #icons > p {
    display: inline;
    vertical-align: top;
    color: #9c9797;
  }

  @media screen and (max-width: 760px) {
    
    flex-direction: column;
    gap: 10px;
    
    input {
      margin-left: 25px;
    }
  }
`;

const ImgLogo = styled.img`
  height: 50px;
`;

function Header() {
  return (
    <HeaderContainer>
      <ImgLogo src={logo} alt="Logo Box401" />
      <Search />

      <div id="icons">
        <img id="iconeface" src={iconFace} alt="icone facebook" />
        <img id="iconeinsta" src={iconInsta} alt="icone Instagram" />

        <p>/box401oficial</p>
      </div>
    </HeaderContainer>
  );
}

export default Header;

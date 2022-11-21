import BannerBlackFriday from "../../imagens/BannerBlackFriday.jpg"
import styled from "styled-components"

const Bannermug = styled.img `
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 250px;

    @media screen and (max-width: 760px) {
    height: 150px;
  }
`

function Banner() {
    return (
        <Bannermug src={BannerBlackFriday} />
    )
}

export default Banner
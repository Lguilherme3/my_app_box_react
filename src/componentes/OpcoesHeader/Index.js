import styled from 'styled-components'

const textoOpcoes = ['NOSSA HISTÓRIA', 'CANECAS', 'PERSONALIZAÇÃO', 'CONTATOS', 'ACESSAR CONTA']

const Opcoes = styled.ul`
  display: flex;
  justify-content: center;

  p {
    background-color: #9C9797;
    padding: 5px 8px;
    color: white;
    border-radius: 10px 0px
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    
    }

    p {
      margin-right: 40px;
      margin-top: -5px;
      width: 100%;
    }
`

const Opcao = styled.li`
    
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`



function OpcoesHeader() {
    return (
        <Opcoes>
        {textoOpcoes.map( (texto) => (
          <Opcao><p>{texto}</p></Opcao>
        ) )}
       </Opcoes>
    )
}

export default OpcoesHeader
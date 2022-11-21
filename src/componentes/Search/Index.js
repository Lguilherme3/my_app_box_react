import styled from "styled-components";

const SearchItens = styled.div`
  input {
    height: 30px;
    width: 300px;
    border-radius: 50px;
    border: 1px solid #9c9797;
    color: #9c9797;
    font-size: 18px;
    padding: 6px;
  }

  button {
    background: transparent;
    border: none;
    vertical-align: middle;
    position: relative;
    right: 40px;
  }

  span.material-symbols-outlined {
    color: #9c9797;
  }

  span.material-symbols-outlined:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    input {
      width: 250px;
    }
  }
`;

function Search() {
    return (
        <SearchItens class="blocoIcones">
        <input src="text" />
        <button src="submit">
          <span class="material-symbols-outlined">search</span>
        </button>
      </SearchItens>
    )
}

export default Search;
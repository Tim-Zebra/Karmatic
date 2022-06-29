import styled from "styled-components";

export const NeighborhoodCardContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content:space-around;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkgrey };
  margin: .5rem;


  img {
    height: 33px;
    margin: 0 10px;
  }

  p {
    border: none;
    background-color: white;
    font-size:22px;
    margin-right: 10px;
  }

  p:hover {
    /* cursor: pointer;
    color: ${({ theme }) => theme.colors.darkpurple }; */
  }

`


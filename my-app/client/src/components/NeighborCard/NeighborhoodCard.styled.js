import styled from "styled-components";

export const NeighborhoodCardContainer = styled.div`
  width: 100%;
  display:flex;
  border: 2px solid ${({ theme }) => theme.colors.darkgrey };
  border-radius: 5px;
  background-color: white;
  justify-content:space-around;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkgrey };
  margin: .5rem;

  &:hover {
    box-shadow: 0 4px 8px 0 #E0B9B9, 0 6px 20px 0 #E0B9B9;
  }

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


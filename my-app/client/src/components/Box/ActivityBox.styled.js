import styled from "styled-components";

export const ActivityBoxStyled = styled.div`
  width: 98%;
  display:flex;
  flex-direction: row;
  border: 2px solid #666666;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  margin:0 0 10px 0;
  background-color: white;
  justify-content:space-between;

`

export const ActivityHistory = styled.div`
width:75%;
border: 1px solid ${({ theme }) => theme.colors.darkteal};
margin:5px;
border-radius: 5px;

`
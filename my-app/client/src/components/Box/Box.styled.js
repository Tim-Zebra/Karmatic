import styled from "styled-components";

export const UserContainer = styled.div`
  width: 60%;
  border: 2px solid #4A5655;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  margin:30px;
  background-color: white;
  box-shadow: 0 4px 8px 0 #E0B9B9, 0 6px 20px 0 #E0B9B9;
`

export const UserContainerBorder = styled.div`
  border-left: 3px solid #4A5655;
  border-right: 3px solid #4A5655;
  border-radius: 20px;
`

export const UserContainerBorderThick = styled.div`
  border: 2px solid #4A5655;
  border-radius: 20px;
  padding:20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & h1{
    color:#666666;
  }

`

export const UserContainerWide = styled.div`
  width: 92%;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  margin:30px;
  background-color: white;
  box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple} ;

`

export const UserContainerLong = styled.div`
  width: 92%;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  margin:30px;
  background-color: white;
  box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple} ;
`
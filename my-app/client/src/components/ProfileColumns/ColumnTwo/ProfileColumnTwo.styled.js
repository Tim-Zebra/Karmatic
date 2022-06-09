import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:1rem;
`
export const ContainerSubRowOne = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerSubColumnOne = styled.div`
    margin-left: 1rem;
    
    h1 {
        color: ${({ theme }) => theme.colors.darkteal};
    }
`

export const ContainerSubColumnTwo = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 88px;
    }

    h2 {
        margin-top: 0;
        font-family: ${({ theme }) => theme.fonts.otherfont };
    }
`

export const UserContainerWide = styled.div`
  width: 92%;
  border-radius: 20px;
  background-color: white;
  box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple} ;
  
`

export const UserContainerLong = styled.div`
  display: flex;
  width: 92%;
  border-radius: 20px;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple};
  padding-top: 1rem;
`
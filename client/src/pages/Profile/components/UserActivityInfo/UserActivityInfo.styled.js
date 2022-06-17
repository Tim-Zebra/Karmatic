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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1 {
        color: ${({ theme }) => theme.colors.darkteal};
    }

    h2 {
        font-family: ${({ theme }) => theme.fonts.otherfont};
    }
`

export const ContainerSubColumnTwo = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 33px;
    }

    h2 {
        margin: 0 1rem;
        font-family: ${({ theme }) => theme.fonts.otherfont };
    }
`

export const UserContainerWide = styled.div`
  width: 92%;
  border-radius: 20px;
  
`

export const UserContainerLong = styled.div`
  display: flex;
  width: 92%;
  border-radius: 20px;
  margin-bottom: 1rem;
  padding-top: 1rem;
  flex-direction: column-reverse;
`
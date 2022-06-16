import styled from 'styled-components'

export const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`

export const ModalContainer = styled.div`
    background-color: white;
    width:90%;
    border-radius: 5px;
    padding: 1rem;
    z-index: 2;

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`
export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;   
    justify-content: space-between; 
`

export const ModalCloseButton = styled.button`
    background-color: none;
    border: none;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 16px;
    }
    

    &:hover {
        background-color: ${({ theme }) => theme.colors.teal} ;
        cursor: pointer;
    }
    &:active {
        border: 2px solid ${({ theme }) => theme.colors.darkteal}
    }
`
import styled from 'styled-components'

export const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`

export const ModalContainer = styled.div`
    width:100%;
    border-radius: 5px;
    padding: 1rem;
    z-index: 2;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`
export const ModalCloseButton = styled.button`
    height: 44px;
    width: 44px;
    border-radius: 50% ;
    position: absolute;
    top: 222px;
    right: 530px;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    border: none;
    img {
        height: 16px;
        position: relative;
        top: -3px;
        left: -7px;
    }
    

    &:hover {
        background-color: ${({ theme }) => theme.colors.teal} ;
    }
    &:active {
        border: 2px solid ${({ theme }) => theme.colors.darkteal}
    }
`
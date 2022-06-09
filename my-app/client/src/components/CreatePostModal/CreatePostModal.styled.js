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
`

export const ModalContainer = styled.div`
    position: absolute;
    width:90%;
    background-color: ${({ theme }) => theme.colors.lightteal};
    border-radius: 5px;
    padding: 1rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    button {
       height: 44px;
       border-radius: 50% ;
       padding:0 1rem;
       position: relative;
       top: -40px;
       right: -35px;
       background-color: ${({ theme }) => theme.colors.lightgrey};
       border: none;
    }

    button:hover {
        background-color: ${({ theme }) => theme.colors.teal} ;
    }
    button:active {
        border: 2px solid ${({ theme }) => theme.colors.darkteal}
    }

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`
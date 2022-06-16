import styled from 'styled-components'

export const LoginSignUpBody = styled.div`
    margin-top: 8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        align-items: center;
        div {
            margin-right: .3rem;
            
        }
        p {
            color: ${({ theme  }) => theme.colors.darkteal}
        }

        p:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }


    @media only screen and (min-width: 992px) {
        width: 100%;
    }

`
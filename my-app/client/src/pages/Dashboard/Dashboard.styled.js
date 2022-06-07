import styled from 'styled-components'

export const DashboardContainer = styled.div`
    margin-top: 6rem;
`
export const Column = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`

export const GreetingContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    padding: 1rem;
    box-shadow: 3px 3px ${({ theme  }) => theme.colors.lightpurple};
    width: 50%;
    text-align: left;
`

export const UserContainerHeader = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    text-align: center;

`
import styled from 'styled-components'

export const GreetingContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    padding: 1rem;
    box-shadow: 3px 3px ${({ theme  }) => theme.colors.lightpurple};
    width: 50%;
    text-align: left;
    color: ${({ theme }) => theme.colors.darkteal };
`

export const UserContainerHeader = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    text-align: center;
    font-size: 20px;
    margin-bottom: 1rem;
`
export const CurrentKarmaCoinsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const StyledCoin = styled.img`
    height: 44px;
`
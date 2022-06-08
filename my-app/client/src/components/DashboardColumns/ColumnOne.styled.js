import styled from 'styled-components'

export const ColumnContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkgrey}
    }
    a:hover {
        text-decoration: underline;
    }
`
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
    width: 95%;
    margin-bottom: 1rem;
`
export const StyledCoin = styled.img`
    height: 44px;
`

export const KarmaBanner = styled.div`
    background: rgb(226,180,229);
    background: linear-gradient(39deg, rgba(226,180,229,1) 15%, rgba(234,234,234,1) 85%);  
    padding: 1rem;
    border-radius: 25px;
    box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple};
    color: ${({ theme }) => theme.colors.darkpurple};
    width: 50%;
    text-align: center;
    align-self: center;
    margin-bottom: 2rem;
`

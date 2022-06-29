import styled from 'styled-components'

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkteal};
        margin:0;
    }
    p:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    hr {
        width: 100%;
    }
`
export const GreetingContainer = styled.div`
    border-radius: 10px;
    padding: 1rem 0 1rem 0rem;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkgrey };
    font-size: 20px;
`
export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 66%;
    padding: 2rem;
    border-radius: 10px;
    position: -webkit-sticky;
`
export const UserContainerHeader = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    text-align: center;
    font-size: 20px;
    margin: 1rem 0;
    color: ${({ theme  }) => theme.colors.darkgrey};
    h2 {
        font-family: ${({ theme }) => theme.fonts.otherfont };
        margin: 0;
        font-size: 18px;
    }
`
export const CurrentKarmaCoinsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    margin-top: 1rem;
    
    h3 {
        margin: 0;
        font-size: 30px;
        font-family: ${({ theme }) => theme.fonts.otherfont };
        color: ${({ theme  }) => theme.colors.darkteal};

    }
`
export const StyledCoin = styled.img`
    height: 44px;
    box-shadow: 0px 0px 5px ${({ theme  }) => theme.colors.darkgrey};
    border-radius: 50%;
    margin-right: 1rem;
`


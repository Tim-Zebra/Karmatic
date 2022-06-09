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
    margin-right: 1rem;
`

export const KarmaBanner = styled.div`
    padding: 1rem;
    border-radius: 25px;
    box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple};
    color: ${({ theme }) => theme.colors.darkpurple};
    width: 50%;
    text-align: center;
    align-self: center;
    margin-bottom: 2rem;
`

export const GreatKarmaBanner = styled(KarmaBanner)`
    background: rgb(226,180,229);
    background: linear-gradient(39deg, rgba(226,180,229,1) 15%, rgba(234,234,234,1) 85%);
`
export const AwesomeKarmaBanner = styled(KarmaBanner)`
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`
export const ExcellentKarmaBanner = styled(KarmaBanner)`
    background: rgb(131,58,180);
    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color: ${({ theme  }) => theme.colors.lightgrey};
`
export const CommunityLeaderKarmaBanner = styled(KarmaBanner)`
    background: rgb(168,94,172);
    background: linear-gradient(90deg, rgba(168,94,172,1) 0%, rgba(0,161,145,1) 50%, rgba(252,176,69,1) 91%);
    color: ${({ theme  }) => theme.colors.lightgrey};
`
export const KarmaticHeroKarmaBanner = styled(KarmaBanner)`
    background: rgb(168,94,172);
    background: radial-gradient(circle, rgba(168,94,172,1) 6%, rgba(224,185,185,1) 59%, rgba(0,161,145,1) 82%);
    color: ${({ theme  }) => theme.colors.lightgrey};
`

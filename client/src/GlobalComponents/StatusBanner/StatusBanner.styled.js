import styled from 'styled-components'

export const KarmaBanner = styled.div`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 3px 3px ${({ theme }) => theme.colors.lightpurple};
    color: ${({ theme }) => theme.colors.darkpurple};
    width: 33%;
    text-align: center;
    align-self: center;
    margin-bottom: 2rem;

    &:hover {
        box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.lightpurple};
    }
`
// @William you may want to change theses colors
export const LowKarmaBanner = styled(KarmaBanner)`
background-color: #fce043;
background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);

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
    color: ${({ theme }) => theme.colors.lightgrey};
`
export const CommunityLeaderKarmaBanner = styled(KarmaBanner)`
    background: rgb(168,94,172);
    background: linear-gradient(90deg, rgba(168,94,172,1) 0%, rgba(0,161,145,1) 50%, rgba(252,176,69,1) 91%);
    color: ${({ theme }) => theme.colors.lightgrey};
`
export const KarmaticHeroKarmaBanner = styled(KarmaBanner)`
    background: rgb(168,94,172);
    background: radial-gradient(circle, rgba(168,94,172,1) 6%, rgba(224,185,185,1) 59%, rgba(0,161,145,1) 82%);
    color: ${({ theme }) => theme.colors.lightgrey};
`

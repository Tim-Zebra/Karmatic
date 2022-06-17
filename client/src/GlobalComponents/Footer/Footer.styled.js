import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100vw;
    font-size:18px;
    color: ${({ theme }) => theme.colors.darkgrey };

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

`
export const Icons = styled.div`
    margin-top: 2rem;
    img {
        height: 22px;
        margin: 0 .5rem;
    }
    img:hover {
        cursor: pointer;
    }
`

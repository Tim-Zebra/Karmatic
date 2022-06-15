import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
bottom:0;
left:0;
width: 100vw;
font-size:18px;
color: ${({ theme }) => theme.colors.darkgrey };
height: 2rem;
display: flex;
align-items: center;
justify-content: flex-end;
background-color: whitesmoke;
`


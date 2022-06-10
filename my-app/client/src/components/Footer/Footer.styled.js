import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
bottom:0;
left:0;
width: 100%;
font-size:18px;
color: ${({ theme }) => theme.colors.darkgrey };
opacity: .8;
height: 2rem;
display: flex;
align-items: center;
justify-content: flex-end;
flex-shrink: 0;
`

// export const Wrapper = styled.div`
   
//     margin-bottom: 2rem;
// `
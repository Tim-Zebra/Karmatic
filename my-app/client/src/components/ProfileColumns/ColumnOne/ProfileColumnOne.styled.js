import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.lightteal};

    & h1, h2, h3{
    color:${({ theme }) => theme.colors.darkteal};
    }
`

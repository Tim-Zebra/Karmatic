import styled from 'styled-components'

export const StyledHome = styled.div`
    width: 800px;
    border: 2px solid ${({borderColor}) => borderColor };
    border-radius: 50px;

    &:hover {
        border: 3px solid white;
    }
`
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
}
body {
    padding: 0;
    margin: 0 0 2rem 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
}

html {
    height: 100%;
}
body {
    padding: 0;
    margin: 0 0 0 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer"


const theme = {
  colors: {
    darkteal: '#00A191',
    teal: '#5EACA4',
    lightteal: '#B1DCD8',
    purple: '#E2B4E5',
    lightpurple: '#E0B9B9',
    darkpurple: '#A85EAC',
    lightgrey: '#E9E9E9',
    darkgrey: '#4A5655',
  },
  fonts : {
    otherfont: 'Nunito Sans'
  }
}


export default function App() {
  return (
        <>
          <ThemeProvider theme={ theme }>
          <GlobalStyles />
          <Nav />
          <Home />
          <Footer />
          </ThemeProvider>
        </>
  );
}

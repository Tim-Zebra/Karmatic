import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

const theme = {
  maintextcolor: '#00A191',
  maintextcolor2: '#5EACA4',
  lightcolor: '#B1DCD8',
  bubble: '#E2B4E5',
  shadow: '#E0B9B9',
  darkshadow: '#A85EAC',
  mainbg: '#E9E9E9',
  footerheaderbg: '#4A5655'
}


export default function App() {
  return (
        <div>
          <GlobalStyles />
          <Nav />
          <Home />
        </div> 
  );
}

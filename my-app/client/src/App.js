import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer"

const httpLink = createHttpLink({
  uri: '/graphql',
});

// FOR AUTH
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  fonts: {
    otherfont: 'Nunito Sans'
  }
}

export default function App() {
  // Logic to have app follow the current page being displayed
  const [currentPage, setCurrentPage] = useState('Page1');
  const handlePageChange = (page) => setCurrentPage(page);

  // Renders current page
  const renderCurrentPage = () => {
    console.log('The Current Page selected and through renderCurrentPage function', currentPage);
    if (currentPage === 'Page1') {
      return <Home />;
    }
    if (currentPage === 'Page2') {
      return <Dashboard />;
    }
    if (currentPage === 'Page3') {
      return <Profile />;
    }
  }

  return (
    <ApolloProvider client={client}>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderCurrentPage()}
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

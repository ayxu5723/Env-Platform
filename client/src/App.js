import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserDash from './pages/UserDash';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import About from './pages/About';
import Donate from './pages/Donation';


const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/about" 
              element={<About />}
            />
            <Route 
              path="/userdashboard" 
              element={<UserDash />}
            />
            <Route 
              path="/donate"
              element={<Donate />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<SignUp />}
            />
           </Routes>
         </div>
       </Router>
    </ApolloProvider>

  );
}

export default App;

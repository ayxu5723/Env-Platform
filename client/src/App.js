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
import Contact from './pages/Contact';
import PageFooter from './components/PageFooter';



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
        <div className="h-32 w-full">
          <Header />
          <div className="h-screen w-full content-center">
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
              path="/me" 
              element={<UserDash />}
            />
            <Route 
              path="/userdashboard/:username" 
              element={<UserDash />}
            />
            <Route 
              path="/donate"
              element={<Donate />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
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
           <PageFooter /> 
         </div>
       </Router>
    </ApolloProvider>

  );
}

export default App;

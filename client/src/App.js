import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';

import UserDash from './pages/UserDash';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import About from './pages/About';
import Donate from './pages/Donation';

const client = new ApolloClient({
  uri: '/graphql',
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
            // <Route 
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

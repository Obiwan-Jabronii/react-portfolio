import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// import components 
import Header from './components/Header';
import Footer from './components/Footer';

//import pages 
import Home from './pages/Home';
import Comments from './pages/Comments';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
//return JSX 
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
            <div className='container'>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/projects"
                  element={<Projects />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="/comments"
                  element={<Comments />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/*"
                  element={<NoMatch />}
                />
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

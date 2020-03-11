import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Body from './components/layouts/Body';
import About from './components/layouts/About';
import Contact from './components/layouts/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ Landing } />
        <Route exact path='/' component={ Body } />
        <div className=''>
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
        </div>
        {/* </> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
import Footer from './Components/Footer';

function App () {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

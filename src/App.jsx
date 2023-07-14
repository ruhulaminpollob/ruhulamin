import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
     
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default App;
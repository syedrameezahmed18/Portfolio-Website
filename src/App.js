import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Cover from './components/cover.js'
import About from './components/about.js'
import { Screencontext } from './context';
import React, { useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Tech from './components/tech';
import Services from './components/services'
import Projects from './components/projects'
import Footer from './components/footer';
import PopUp from './components/popup';
import Contact from './components/contact';

function App() {

  let [isscreen, setisscreen] = useState(null);
  console.log(window.screenY);

  const changed = () => {
    setisscreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", changed)
    setisscreen(window.innerWidth);
  }, [])

  return (
    <div className="smooth-scroll">
      <Screencontext.Provider value={{ isscreen, setisscreen }}>
        <Header />
        <Cover />
        <About />
        <Services />
        <Projects />
        <Tech />
        <Contact />
        <Footer />
        <PopUp />
      </Screencontext.Provider>
    </div>
  );
}

export default App;

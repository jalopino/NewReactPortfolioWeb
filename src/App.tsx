import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <div className='App overflow-clip'>
        <Header/>
        <Nav/>
      <div>
        <Home/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

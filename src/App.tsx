import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import { Element, scroller } from 'react-scroll';

function App() {
  const [notification, setNotification] = useState(false)
  const [close, setClose] = useState(0)
  const [status, setStatus] = useState('')
  const scrollData = (data: string) => {
    scroller.scrollTo(data, {
      duration: 900,
      delay: 0,
      smooth: true,
      offset: -30
    })
  }

  return (
    <div className='App overflow-clip'>
        <Header/>
        <Nav fn={scrollData} noti={notification} notiStat={status} closeNoti={close}/>
        <div>
          <Element name="about">
            <Home/>
          </Element>
          <Element name="portfolio">
            <Portfolio/>
          </Element>
          <Element name="contact">
            <Contact noti={setNotification} setStat={setStatus} setCloseNoti={setClose}/>
          </Element>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

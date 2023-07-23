import React from 'react';

import NavBar from './components/NavBar';
// import Header from './components/Header';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
// import { Navbar } from './components';


const App = () => (
  <div>
    <NavBar />
    <Header/>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    {/* <Intro /> */}
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    {/* <Footer /> */}
  </div>
);

export default App;


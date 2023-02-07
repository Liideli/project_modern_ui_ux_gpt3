import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />

        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App

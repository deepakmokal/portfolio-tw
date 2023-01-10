import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'

function App() {

  return (
    <div className="App font-montserrat border dark:bg-slate-900 p-3 md:p-6">
      
      <Nav />
      <Hero />
    </div>
  );
}

export default App

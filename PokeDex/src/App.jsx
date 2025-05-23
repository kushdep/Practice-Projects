import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './Components/Pokedex'

function App() { 
  return (
    <>
      <Pokedex numOfCrds={3}/>
      <Pokedex numOfCrds={3}/>
    </>
  )
}

export default App

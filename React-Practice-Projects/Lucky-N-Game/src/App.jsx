import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
import {sum} from './LuckyN'

function lessThan4(dice){
  return sum(dice)>4
}

function App() {
    return(
    <>
      <LuckyN numDice={1} goal={lessThan4}/>   
      <LuckyN numDice={3} goal={lessThan4}/>   
    </>
  )
}

export default App

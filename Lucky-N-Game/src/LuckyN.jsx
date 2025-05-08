import { useState } from "react"
import Dice from "./Dice"
import Button from "./Button"

function RollDice(){
    return Math.floor((Math.random()*6)+1)
}

function getRoll(n){
    return Array.from({length:n},()=>RollDice())
}

function sum(nums){
    return nums.reduce((prev,curr)=>prev+curr,0)
}

function LuckyN({numDice, goal}){
    
    const [roll,setRoll] = useState(getRoll(numDice))
    const RollTheDice= () => {
        setRoll(getRoll(numDice))
    }
    
    const isWin = goal(roll)

    return (
        <>
            <Dice dice={roll}/>
    {!isWin && <Button clickFun={RollTheDice} label={"Roll"}/>}
        {isWin && <h1>Winner!!!</h1>}
        </>
    )
}


export {LuckyN as default,sum }
import Die from "./Die"
import './Dice.css'

export default function Dice({dice}){
    console.log("3")
    return (
        <section className="Dice">
            {dice.map((e,i)=>{
                return <Die key={i} value={e}/>
            })}
        </section>
    )
}
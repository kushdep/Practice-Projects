import Pokemon from "./Pokemon";
import PokemonCard from "../assets/PokeDB";
import '../style/Pokedex.css'

export default function Pokedex({numOfCrds}){
    let cards=[]
    let totalExp=0
    for(let i=0;i<numOfCrds;i++){
        let idx=Math.floor((Math.random()*8))
        cards.push(PokemonCard[idx])
        totalExp=totalExp+PokemonCard[idx].base_experience
    }   

    return (
        <>
            <h2>Total Exp = {totalExp}</h2>
            <div className="pokeDiv">
                {cards.map(e=>{
                    console.log(e)
                    return <Pokemon pokObj={e}/>
                })}
            </div>
        </>
    )
}
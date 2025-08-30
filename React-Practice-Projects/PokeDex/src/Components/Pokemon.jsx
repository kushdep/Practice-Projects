export default function Pokemon({pokObj}){
    const {id,name,type,base_experience}=pokObj
    let imgId
    if(id<=9){
        imgId='00'+id
    }else if(id>9&&id<=99){
        imgId='0'+id
    }else{
        imgId=id
    }
    return(
        <>
            <div >
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`} alt="" />
                <h5>{name}</h5>
                <h6>type: {type}</h6>
                <h6>Exp: {base_experience}</h6>
            </div>
        </>
    )
}
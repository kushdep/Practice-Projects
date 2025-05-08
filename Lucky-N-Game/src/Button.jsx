import './button.css'

export default function Button({clickFun,label}){
    return (
        <button onClick={clickFun}>{label}</button>
    )
}
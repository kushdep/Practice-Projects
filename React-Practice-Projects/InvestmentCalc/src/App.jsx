import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [value,setValue] = useState({initialInvestment:0,
  annualInvestment:0,
  expectedReturn:0,
  duration:0,})

  function handleInputValue(changedFeild,changedValue){
    // console.log(changedFeild,changedValue)
    setValue(prev=>{
      let updated= {...prev,[changedFeild]:changedValue}
      console.log(updated)
      return updated
    })
  }

  return<>
    <Header onInputChange={handleInputValue}/>
    <Result data={value} />
  </> 
}

export default App

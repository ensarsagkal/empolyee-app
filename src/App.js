import List from "./components/List"
import { useState } from "react";
import data from "./helper/data";

function App() {
  const[index,setIndex]= useState(5)
  const nextFive=()=>{
    if(index<data.length){
    setIndex(index+5)}else{

      setIndex(5)
    }

  }

  return (
    <main>
      <section className="container">
        <h2>Employee List</h2>
      <List data={data} index={index}/>
      <div className="buttons">
        <button onClick={prevFive}>Previous</button>
        <button onClick={nextFive}>Next</button>
      </div>
      </section>
    </main>
  )
}

export default App

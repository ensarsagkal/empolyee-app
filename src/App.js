import List from "./components/List"
import { useState } from "react";
import data from "./helper/data";
import "./App.css";

function App() {
  const[index,setIndex]= useState(0)
  const nextFive=()=>{
    
    if(index<data.length-5){
    setIndex(index+5)}else{

      setIndex(0)
    }

  }
  const prevFive=()=>{
    if(index===0){
      setIndex(data.length-5)
    }else{
      setIndex(index-5)
    }
   
  }

  return (
    <main>
      <section className="container">
      <article>
      <h2>Employee List</h2>
      <h3>-{index+1} to {index+5}-</h3>
      </article>
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

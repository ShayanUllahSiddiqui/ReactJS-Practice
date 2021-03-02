import React, { useState } from "react";
import Counter from "./components/class-01/counter";

export default function App() {
  const[count,setCount] = useState(0)

  function add(){
    setCount(count+1)
  }

  function sub(){
   setCount(count-1)

 }

  return (
    <div className="App">
      <Counter count={count} add={add} sub={sub} />
    </div>
  );
}
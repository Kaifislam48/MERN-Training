import { useState } from 'react'
import "./Style.css";
export default function State() {
    const [count, setCount] = useState(0);
    let nameClass = "black";
    function onIncrease(){
        // alert("Button clicked");
        setCount(count + 1);
        console.log("Count: ", count);
        if(count > 0){
            nameClass = "green";
        }else {
            nameClass = "red";
        }
    }
    function onDecrease(){
        setCount(count - 1);
        console.log("Count: ", count);
        if(count<0){
            nameClass = "red";
        }
    }
    function onReset(){
        setCount(0);
        console.log("Count reset to 0");
        if(count === 0){
            nameClass = "black";

    }
  return (
    <div>
        <h1>Count <span className={{nameClass}}>{count}</span></h1>
        <button onClick={onIncrease}>Increase</button>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onReset}>Reset</button>
    </div>

  )
}
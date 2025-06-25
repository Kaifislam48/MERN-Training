import { useState } from "react"

export default function Change() {

    const [name, setName] = useState("");
    function onInputChange(event){
        setName(event.target.value);
    }
  return (
    <div>
        <input type="text" placeholder="Enter your name"
        onInputChange={onInputChange} />
        <button>Submit</button>
        <p>{name}</p>
    </div>
  );
}

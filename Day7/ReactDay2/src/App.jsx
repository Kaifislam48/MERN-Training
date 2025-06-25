import Input from "./component/Input"
import State from "./component/State";
import Change from "./component/Change";
export default function App(){
  return (
    <div>
      <Change/>
      {/* <State/> */}
      {/* <h1>Parent Component</h1>
      <input name="Kaif!"/> */}
    </div>
  );
}

// function Hello({name}){
//   return (
//     <div> <h1>Hey, {name}</h1> <p>This is a child Component</p></div>

//   );
// }
import './App.css';
import { Obj }  from "./NewObject/Obj"

function App(props) {

const groupedObj = Map.groupBy(Obj,person=>person.name);
console.log(groupedObj)

  return (
    <div className="App">
    <p>Hello world</p>
{Obj.map((ob) => {
  return (
  <div  className="container" key={ob.name}>
<div className="name">{ob.name}</div>
<div className="age">{ob.age}</div>
<div className="adress">{ob.adrees}</div>
<div  className="hobby">{ob.hobby}</div>
</div>
  )
})}
    </div>
  );
}

export default App;

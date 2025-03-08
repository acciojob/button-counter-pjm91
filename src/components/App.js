
import React,{useSate} from "react";
import './../styles/App.css';

const App = () => {
   const[count,setCount] = useState(0)

  const onAdd = ()=>{
    setCount(count+1)
  }
  return (
    <div>
    <p>Button clicked{count}times</p>
    <button onClick={onAdd}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App

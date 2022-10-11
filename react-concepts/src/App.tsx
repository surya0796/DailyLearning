import './App.css';
import { useSelector } from "react-redux"

function App() {
  const counter = useSelector((state:Object) => state)
  console.log(counter); 
  
  return (
    <div className="App">
      Let's learn Redux today
    </div>
  )
}

export default App;

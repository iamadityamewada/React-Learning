import Greet1 from './Greet1.jsx'
import Button from './Button.jsx'
import './App.css'

const  App =()=>{
  return (<div className="container">
    {/* <h1>Good Morning</h1>
    <Greet1 name="Aditya" age={22}/> */}
    <Button title='Register' age={22}/>
  </div>)
}
export default App;
import { useState } from "react"
import Button from "./component/button"
import './assets/styles/App.css'
const App =()=>{
    const[state , setState ] = useState({count:0}) 

    const onIncClick =()=>{
       setState({count:state.count+1})
    }
    const onDecClick =()=>{
        setState({count:state.count-1}) 
    }
    const onResetClick =()=>{
        setState({count:0})
    }
    
    return(
        <div className="container">
            <div className="Counter">{state.count}</div>
            <Button  id="B" onPress={onIncClick} title="Inc+" bgColor="blue" color="white" fSize="20px"/>
            <Button onPress={onDecClick} title="Dec-" bgColor="green" color="white" fSize="20px"/>
            <Button onPress={onResetClick} title="Reset" bgColor="red" color="white" fSize="20px"/>
        </div>)
}
export default App;

//3 button center of the screen sperate project
// seprate project one button text follow us // on click follow and unfollow
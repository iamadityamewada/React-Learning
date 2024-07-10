import './styles/App.css'
import { useState } from "react";
import Button from "./component/Button";

const App  = ()=> {
  const[state, setState] = useState({title:"Follow"});
  const onBtnClick =()=>{
     state.title=== 'UnFollow'?setState({title:"Follow"}):setState({title:"UnFollow"})
  }
 return (
   <div className="container">
      <Button  onPress={onBtnClick} title={state.title} />
   </div>
 )
}
export default App;
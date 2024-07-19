import React from "react";
import { useState } from "react";

const Login =()=>{
const[values , setValues] = useState({
    username:"",
    pass:"",
    rePass:"",
    email:"",
})

 const onValueChange = (event, field) =>{
    setValues({...values , [field]:event.target.value})
  }

 const onBtnClick = ()=>{
    console.log(values);
 }  
    return(<div>
        <h1>Form Validator</h1>
        <input onChange={(event)=> onValueChange(event ,"username")} value= {values.username} type="text" placeholder="username" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"pass")} value= {values.pass}  type="text" placeholder="password" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"rePass")} value= {values.rePass}   type="text" placeholder="re password" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"email")} value= {values.email}   type="text" placeholder="email" /><br /><br />
        <button onClick={onBtnClick}>Submit</button>
        </div> )

}
export default Login
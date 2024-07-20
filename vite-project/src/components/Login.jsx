import React from "react";
import { useState } from "react";

const Login =()=>{
const[values , setValues] = useState({
    username:"",
    pass:"",
    rePass:"",
    email:"",
    mobileNo:"",
})

 const onValueChange = (event, field) =>{
    setValues({...values , [field]:event.target.value})
  }

 const onBtnClick = ()=>{

   let allNums = "1234567890";
   let isNum = false;
   for (let c of values.pass) {
     if (allNums.indexOf(c) !== -1) {
       isNum = true;
     }
   }

   let re = /^[^\s@]+@[^\s@]+\.[^\s@]/;
   
   let alphabet ='abcdefghijklmnopqrstuvwxyz';
  const includeUpperChar =()=>{
      for(let val of values.username){
      if(alphabet.toUpperCase().includes(val)){
        return true;
      }
  }
  }

   if (values.pass !== values.rePass) {
     console.log("Password does not match");
   } else if (values.pass?.length < 8) {
     console.log("Password length must be greater then 8 char.");
   } else if (!isNum) {
     console.log("Atleast one digit required.");
   } else if(!values.pass.includes('#' || '$' || '!' || '*' || "%" || "," || '.')){
    console.log("Password must contains special character");
   } else if(values.pass.includes('@')){
     console.log("Password must not contains '@' symboll ");
   } else if (!values.email.match(re)) {
    console.log("Please enter valid email address");
   } else if (values.username.length<1){
    console.log("username has at least one character");
   } else if (!includeUpperChar()){
    console.log("username should has one upper character");
   } else if ((values.username[0] === values.username[0].toUpperCase() || values.username[values.username.length - 1] === values.username[values.username.length - 1].toUpperCase() )){
     console.log("upper char should not be first or last of username");
   } else if (!(values.mobileNo.length>9 && values.mobileNo.length<12)){
    console.log("Mobile Number Should be of 10 or 11 digit");
  } else if (!(values.mobileNo.length === 11 && values.mobileNo[0]== 0 || values.mobileNo.length == 10)){
    console.log("If mobile number is of 11 digit then first digit must be 0");
  } else if (isNaN(values.mobileNo)){
    console.log("mobile number should be number");
  } else {
     console.log(values);
   }
 }  
    return(<div>
        <h1>Form Validator</h1>
        <input onChange={(event)=> onValueChange(event ,"username")} value= {values.username} type="text" placeholder="username" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"pass")} value= {values.pass}  type="text" placeholder="password" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"rePass")} value= {values.rePass}   type="text" placeholder="re password" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"email")} value= {values.email}   type="text" placeholder="email" /><br /><br />
        <input onChange={(event)=> onValueChange(event ,"mobileNo")} value= {values.mobileNo}   type="text" placeholder="Mobile No" /><br /><br />
        <button onClick={onBtnClick}>Submit</button>
        </div> )

}
export default Login;
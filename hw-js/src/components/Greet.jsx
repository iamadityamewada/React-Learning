import  React from 'react'
const Greet = (props)=>{
   Details={
        name:"",
        age:"",
        email:"",
        address:{
           city:"",
           pinCode:"",
           state:"",
        },
      college:"",
    }
    return(
       <div>
        <h1>Name:{props.Details} <br />
            Age:
        </h1>
       </div>
    )
}
export default Greet;

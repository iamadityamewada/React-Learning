import { useState } from "react";

const State =()=>{
      const [uname, setUname] = useState('')

   const onUsernameHandle =(e)=>{
       setUname({...uname, uname:e.target.value})
   }
   const onSubmit =(e)=>{
       console.log(uname);
   }
    return(
        <div>
            <input onChange={onUsernameHandle} value={uname

            } type="text" placeholder="Enter Username"  />
            <button>Add</button>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default State;
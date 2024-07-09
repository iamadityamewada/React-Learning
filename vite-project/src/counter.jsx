// -----------------08 july-------------------
// React Hooks

// use state return an array which contains 2 values 
import { useState } from 'react';

const Counter = ()=>{
    const [state, setState] = useState({count:0});
    const onReset =()=>{
        setState({count:0});
    }
    const onIncrement =()=>{
        setState({count:state.count+1});
    }
    const onDecrement= ()=>{
        if(state.count>0){
            setState({count:state.count-1});
        }
    }
    return (
        <div>
          <button onClick={onReset}>Reset</button>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <p>You Clicked me {state.count} times.</p>
        </div>
    );
}
export default Counter;
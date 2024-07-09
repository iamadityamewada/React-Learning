import {useState} from 'react'
const Counter =(props)=>{
    const[state,setState]= useState({count:0})
    const onCount = (props) => {
        if(props.title ==='Reset'){
            setState({count:0});
        }else if(props.title === 'Increment'){
            setState({count:state.count+1});
        }else if(props.title === 'Decrement'){
            if(state.count>0){
                setState({count:state.count-1});
            }
        }
    }
    return (
        <div>
            <button onClick={onCount(props)} style={ {backgroundColor:props.bgColor, color:props.color, fontSize:props.fSize}} > {props.title}</button>
        </div>
    )
} 
export default Counter;
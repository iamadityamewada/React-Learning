const Button =(props)=>{
    return(
        <div>
            <button onClick={props.onPress} style={{backgroundColor:props.bgColor, color:props.color , fontSize:props.fSize}}>{props.title}</button>
        </div>
    )
}
export default Button;
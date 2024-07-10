import './Button.css'
const Button =(props)=>{
    return( 
     <div className="container">
       <button className="btn" onClick={props.onPress}>{props.title}</button>      
     </div>
    )
}
export default Button;
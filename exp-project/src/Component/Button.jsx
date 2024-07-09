import './style.css'
const Button = (props)=>{
    let {title='Login',name} = props;
    // title= title||name||'Login'
   const btnStyle={
        color:"white",
        backgroundColor:"black",
        fontSize:"50px"
    }
return <div className='btn-container'>
    <button className='btn'>{title}</button>
</div>
}
export default Button;

// diff btw call bind and apply
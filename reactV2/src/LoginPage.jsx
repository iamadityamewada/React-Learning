import './Login.css'

const Login =()=>{
    const onInputValueChange = (event)=>{
        console.log(event)
    }
    return(
        <div className='container'>
            <p>Login Now</p>
            <div className="login-form">
                <div>
                    <label>Username</label><br/>
                    <input onChange={onInputValueChange} type="text" />
                </div>
                <div>
                    <label>Password</label><br/>
                    <input onChange={onInputValueChange} type="text" />
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}
export default Login;
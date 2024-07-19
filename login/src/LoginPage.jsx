import './LoginPage.css'


const Login =()=>{
    const onInputValueChange = (event)=>{
        console.log(event)
    }
    return(<div className="LoginPage">
        <nav>
            <div className="logo"><img src="data:image/png;base64,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" alt="" /></div>
            <div className="nav-service">
                <p>Summer Internship</p>
                <p>Institute Solution</p>
                <p>Event</p>
                <p>About Us</p>
                <p>Certificate</p>
            </div>
            <div className="login"><a>Login</a></div>
        </nav>
         <div className='container'>
            <div className="head">
            <h1>Login Your Account</h1>
            <p>Hi Dear, Enter your email address and password, and start your learning <br/> journey.</p>
            </div>
           <div className="login-form">
                <div>
                    <label>Email Address</label><br/>
                    <input onChange={onInputValueChange} placeholder='Enter Your Email' type="text" />
                </div>
                <div>
                    <label>Password</label><br/>
                    <input onChange={onInputValueChange} placeholder='Enter Your Password' type="text" />
                    <p>Forgot Password</p>
                </div>
                <button className='button-login'>Login Now</button>
                <div className="divider"></div>
                <button className='button-google'>Sign In with Google</button>
            </div>
             <a href="">Don't have an account ? Sign Up</a>
        </div>
    </div>
       
    )
}
export default Login;
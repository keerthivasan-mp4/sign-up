import React from "react";
import "./signup.css";
// import apple from './images/apple.png';



const Signup = () =>{
    return(
        
       <div className="addUser">
             <h3>Welcome Back</h3>
                 <form action="">
                    <div className="inputGroup">
                      <input type="email" placeholder="Enter Your Email" id="email"/>
                      <input type="password" placeholder="Password" id="password"/> <br />
                      <input type="checkbox" name="show-password" id="show-password"  placeholder="Show PAssword"/> <label htmlFor="show-password">Show Password</label>
                      <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </form>


             {/* divider using OR */}
                <p id="or">OR</p>
                <p id="login-with">Login with</p>

              
                  

                    <button className="apple-login-btn" id="apple-btn">
                        <a href="https://www.apple.com"><img src="./image/apple.png" alt="apple"  id="apple-img"/> apple</a>
                    </button>


                    <button className="google-login-btn" id="google-btn">

                 <a href="https://www.google.com"><img src="./image/google.png" alt="google"  id="google-img"/> Google</a>
                    </button>

                <div className="sign-up">
                    <p id="signup-txt">Don't have an account?</p> 
                    <a id ="signup-link" href="http://">Sign up</a>
                </div>

       </div>

    
    )
}

export default Signup
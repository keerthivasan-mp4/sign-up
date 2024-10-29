import React from "react";
import "./signup.css";
// import apple from './src/images/apple.png';



const Signup = () =>{
    return(
       <div className="addUser">
             <h3>Log in</h3>
                 <form action="">
                    <div className="inputGroup">
                      <input type="email" placeholder="Enter Your Email" id="email"/>
                      <input type="password" placeholder="Password" id="password"/>
                      <button type="submit" class="btn btn-success">Login</button>
                    </div>
                </form>

             {/* divider using OR */}
                <p id="or">OR</p>
                <p id="login-with">Login with</p>

                <button class="btn btn-primary" id="google-btn">
                   Google
                    </button> <br />
                <button class="btn btn-primary" id="apple-btn"><img src="src/images/google.png" alt=""  />Apple</button>

                

                
                <div className="login">
                    <p id="login-txt">Don't have an account?</p>
                     <button class="btn btn-primary" id="login-btn">sign up</button>
                </div>

       </div>
    )
}

export default Signup
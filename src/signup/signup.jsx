import React from "react";
import "./signup.css"
const Signup = () =>{
    return(
       <div className="addUser">
             <h3>Log in</h3>
                 <form action="">
                    <div className="inputGroup">
                      <input type="email" placeholder="Enter Your Email" id="email"/>
                      <input type="password" placeholder="Password" id="password" minLength={8}/>
                      <button type="submit" class="btn btn-success">Sign up</button>
                    </div>
                </form>

             {/* divider using OR */}
                <p id="or">OR</p>
                <p>Login Wth</p>

                <button class="btn btn-primary" id="google-btn"><img src="" alt="" srcset="" />Google</button> <br />
                <button class="btn btn-primary" id="apple-btn"><img src="" alt="" srcset="" />Apple</button>


                <div className="login">
                    <p>Already have an account?</p>
                     <button class="btn btn-primary" id="login-btn">Login</button>
                </div>

       </div>
    )
}

export default Signup
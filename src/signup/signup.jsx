import React from "react";
import "./signup.css";
// import apple from './images/apple.png';



const Signup = () =>{
    return(
        
       <div className="addUser">
             <h3>Log in</h3>
                 <form action="">
                    <div className="inputGroup">
                      <input type="email" placeholder="Enter Your Email" id="email"/>
                      <input type="password" placeholder="Password" id="password"/>
                      <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </form>


             {/* divider using OR */}
                <p id="or">OR</p>
                <p id="login-with">Login with</p>

              
                <div id="apple-container"> 
                    <a href="https://www.apple.com"><img src="./image/apple.png" alt="apple" id="apple-img"/></a> <p>Apple</p>
                    </div>


                 <a href="https://www.google.com"><img src="./image/google.png" alt="google"  id="google-img"/></a>

               
               
               
               
                {/* <button className="btn btn-primary" id="google-btn"> <img src="./images/google.png" alt="google"/>
                   Google
                    </button> <br />
                <button className="btn btn-primary" id="apple-btn"><img src="./images/apple.png" alt="Apple"/>Apple
                </button> */}

                

                
                <div className="login">
                    <p id="login-txt">Don't have an account?</p> <a id ="signup-link" href="http://">Sign up</a>
                </div>

       </div>

    
    )
}

export default Signup
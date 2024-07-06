import React from "react";
import githubIcon from '../assets/images/github.png'
import googleIcon from '../assets/images/google.png'

const Login = () => {
  return (
    <div className="registerPages">
      <div className="registerContainer">
        <div className="titleLogin">Login Notes</div>
        <div className="inputBox">
          <div className="registerItem">Username</div>
          <input type="text" placeholder="Masukkan Username anda" />
        </div>
        <div className="inputBox">
          <div className="registerItem">Password</div>
          <input type="password" placeholder="Masukkan Password anda" />
        </div>
        <div className="inputBox">
          <button className="loginBtn">Login</button>
        </div>
        <div className="textLogin">Masuk dengan</div>
        <div className="loginOption">
            <img src={githubIcon} alt="login github" />
            <img src={googleIcon} alt="login google" />
        </div>
      </div>
    </div>
  );
};

export default Login;

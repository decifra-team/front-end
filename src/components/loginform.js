import React, { useState } from "react";
import logo from "./logo.svg";
import "./loginform.css"


const LoginForm = () => {

    const[popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <>
            <div className="cover" >
                <image src= {logo} className="logo"/>
            </div>

            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn" onClick={popup}>Entrar</div>

                <div className={popupStyle}>
                    <h1>Login Falhou</h1>
                    <p>ID ou Senha incorreta</p>
            </div>

            

        </div>
        </>
    )
}

export default LoginForm
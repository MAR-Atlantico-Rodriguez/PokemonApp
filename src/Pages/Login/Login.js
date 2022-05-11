
import { Navigate } from "react-router-dom";
import { useDashboard } from "../../Hooks/useDashboard";
import "./Login.css";
import { LoginForm } from "./LoginForm";

// const { useState } = require("react");

export function Login() {
    
    const { onSuccess } = useDashboard();
    
    function onLoginFormSuccess() {
        onSuccess();
        Navigate("/");
        console.log('llego aca');
    }

    return (
        <div className="login">
            
            <div class="login-divForm">                
               
                <LoginForm onLoginFormSuccess={onLoginFormSuccess}/>

            </div>

        </div>        
    )
}
import { useState } from "react";
import "./LoginForm.css";

export function LoginForm({onLoginFormSuccess}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleClick() {
        if (email === "test@test.com") {
          if (password === "test") {
            setError("");
            window.localStorage.setItem("isLogged", true);
            onLoginFormSuccess();                  
            return ;
          }
        }
    
        window.localStorage.setItem("isLogged", false);
        setError("Datos Incorrectos");
      }


    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    
    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="LoginForm">
            <h2 className="LoginFormDescription">Login</h2>

            {error.length > 0 ? (
                <div className="LoginFormError">
                    {error}
                </div>
            ) : null}
            
            <div className="LoginFormContainer">
                <label className="LoginFormInputLabel">Email</label>
                <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} ></input>

                <label className="LoginFormInputLabel">Password</label>
                <input name="password" id="password" type="password" className="LoginFormInput" value={password} onChange={onPasswordChange} ></input>

                <button className="LoginFormButton" onClick={handleClick}>Ingresar</button>
            </div>            

        </div>        
    )
}
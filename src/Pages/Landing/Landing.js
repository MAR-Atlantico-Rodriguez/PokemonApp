import { Link } from "react-router-dom";
import "./Landing.css";


// const { useState } = require("react");

export function Landing() {

    return(
        <div className="landing">
            
            <div className="landing_titulo">
                Bienvenido a la APP de Pokemones!
            </div>
            <div className="landing_img">
                <img src={process.env.PUBLIC_URL + 'imgLandingPokemon.png'} alt="Pokemon"/>
            </div>
            <div className="landing_login">
                <Link to="/login"  className="landing_login">Ingresar a la App</Link> 
            </div>
        </div>
    );

}
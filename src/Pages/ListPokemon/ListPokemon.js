import { useEffect, useState } from "react";
import { CardsPokemon } from "../../Components/CardsPokemon/CardsPokemon";
import { getPokemones } from "../../Services/ListPokemon";
import "./ListPokemon.css";

export function ListPokemon() {

    const [pokemones, setPokemones] = useState([]);

    async function getPokemon(){
        await getPokemones().then(resp =>{
            const {results} = resp;
            setPokemones(results);
        });
    }

    return(
        <div className="ListPokemon">
            <button onClick={getPokemon}>Poquemon</button>
            <CardsPokemon Pokemones={pokemones}/>
        </div>
    );

}
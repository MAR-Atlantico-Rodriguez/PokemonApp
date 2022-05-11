

import { CardsPokemon } from "../../Components/CardsPokemon/CardsPokemon";
import "./ListPokemon.css";

export function ListPokemon() {

    return(
        <div className="ListPokemon">
            <div className="tabla">
                <CardsPokemon/>
            </div>
        </div>
    );

}
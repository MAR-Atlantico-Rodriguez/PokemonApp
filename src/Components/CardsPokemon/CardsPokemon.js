import { Card, CardBody, CardLink, CardTitle } from "reactstrap";
import './CardsPokemon.css';

export function CardsPokemon({pokemones}){
    console.log(pokemones);
    return(
        pokemones?.map(({ name, url }, i) => (
            <Card className="Card">
                <CardBody>
                    <CardTitle tag="h4" className="CardTitle">
                        {name}
                    </CardTitle>                
                </CardBody>
                        
                <img alt="Card image cap" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" width="100%"/>
                
                <CardBody>                
                    
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Link
                    </CardLink>
                </CardBody>
            </Card>
        ))
    )
}
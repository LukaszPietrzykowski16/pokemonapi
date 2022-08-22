import { useEffect, useState } from "react";
import Pokemon from "./pokemon";


const PokemonInfo = () => {
    const [mon, setMon] = useState([])
    
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokemon = [];
                for(let i=1; i<11; i++){
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    const data = await response.json();
                    pokemon.push(data.sprites.front_default)
                    // data.types, data.id, data.stats
                }

                setMon(pokemon)
                
            } catch (error) {
                console.log(error);
            }
        } 
        fetchPokemon()
        
    }, [])
    return mon;
}

export default PokemonInfo;
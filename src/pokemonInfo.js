import { useEffect, useState } from "react";
import Pokemon from "./pokemon";


const PokemonInfo = () => {
    const [mon, setMon] = useState([])

    let number = 10;

    const fetchPokemon = async () => {
        try {
            const pokemon = [];
            for(let i=1; i<number; i++){
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                const data = await response.json();
                pokemon.push(data.sprites.front_default)
                // data.types, data.id, data.stats
            }

            setMon(pokemon)
            
            number += 20;
        } catch (error) {
            console.log(error);
        }
    } 

    const handleScroll = (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
            fetchPokemon();
        } 
     }

     useEffect(() => {
        fetchPokemon()
        window.addEventListener('scroll', handleScroll)
    }, [])
   


    return mon;
}

export default PokemonInfo;
import React, {useEffect, useState} from 'react';
import PokemonInfo from './pokemonInfo';


const Pokemon = () => {
    const [poke, setPoke] = useState([]);
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(
                  'https://pokeapi.co/api/v2/pokemon?limit=10'
               );
               const data = await response.json();
             
               const arrayOfPokemons = [];
               data.results.forEach((exactPokemon) => arrayOfPokemons.push([exactPokemon.name, exactPokemon.url]));
               setPoke(arrayOfPokemons);
            } catch (error) {
               console.log(error);
            }
         };
         fetchPost()
    }, [])

    const mon = PokemonInfo()
    console.log(mon)
    return (
      <>
        {poke.map((exactPokemon, i) => {
            return (
                <>
            <div className='pokemon' key={i}> 
            {exactPokemon[0]}
            </div>
            <div className='info'> 
                <img src={mon[i]}></img>
            </div>
         
                </>
            )
        })}
       
      </>
    )
}
 

export default Pokemon;
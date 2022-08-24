import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PokemonInfo from './pokemonInfo';
import About from './About';

const Pokemon = () => {
    const [poke, setPoke] = useState([]);
 
    let offset = 0;
    const fetchPost = async () => {
     
        try {
           const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
           );
           const data = await response.json();
         
           const arrayOfNewPokemons = [];
           data.results.forEach((exactPokemon) => arrayOfNewPokemons.push(exactPokemon.name));
           setPoke((arrayOfOldPokemons) => [...arrayOfOldPokemons, ...arrayOfNewPokemons]);
        } catch (error) {
           console.log(error);
        }
        offset += 10;
        
     };
   
     const handleScroll = (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
            fetchPost();
        } 
     }
   
    useEffect(() => {
         fetchPost()
         window.addEventListener('scroll', handleScroll)
    }, [])

    const mon = PokemonInfo()
    
    return (
      <>
        <div className='container'>
            {poke.map((exactPokemon, i) => {
            return (
                <>
            <Link to={exactPokemon}>
            <div className='pokemon' key={i}> 
            <p> {exactPokemon} </p>
            <div className='pokemon-img'>
                <img src={mon[i]} alt={exactPokemon}/>
            </div>
            </div>
            </Link>
            
                </>
            )
            })}
        </div>
        
       
      </>
    )
}
 

export default Pokemon;
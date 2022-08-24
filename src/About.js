import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function About() {
    let { pokemon } = useParams();

    const [more, setMore] = useState([])
    const [isDataFetched, setFetch] = useState(false)
    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const data = await response.json();
            const poke = ({
                pokemonAbilities: data.abilities,
                pokemonSprites0: data.sprites.front_default,
                pokemonSprites1: data.sprites.front_shiny,
                pokemonStats: data.stats,
                pokemonType: data.types
            })
            
          
            setMore(poke)
            setFetch(true)
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() =>{
        fetchPokemon()
    }, [])

    console.log(more)

    function PokemonData(){
        return (
            <div className="pokemon-card">
                <h1> {pokemon} </h1>
                <img src={more.pokemonSprites0}></img>
                 {more.pokemonType.map((element) => { return <span> {element.type.name}  </span>  })}
                <h2> Pokemon abilities:</h2>
                <ul>
                    {more.pokemonAbilities.map((element) => {
                    return <li> {element.ability.name} </li>
                    })}
                </ul>
                <h3> Pokemon stats: </h3>
                {more.pokemonStats.map((element) => {
                    return <p> {element.stat.name}: {element.base_stat} </p> 
                })}
            </div>
        )
    }

    return (
        <div className="main">
            {isDataFetched ? PokemonData() : 'Error'}
        </div>
    )
}

export default About;



           
              
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
                pokemonStats: data.stats
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

  

    function PokemonData(){
        return (
            <div className="pokemon-img">
                <img src={more.pokemonSprites0}></img>
                <h2> Pokemon abilities:</h2>
                <ul>
                 
                </ul>
                <h3> Pokemon stats: </h3>
                {more.pokemonStats.map(element => {
                    return <p> {element.base_stat} </p> 
                })}
            </div>
        )
    }

    return (
        <div className="about">
            <div className="pokemon">
                
                <h1> {pokemon} </h1>
                {isDataFetched ? PokemonData() : 'Error'}
                
            </div>
        </div>
    )
}

export default About;



           
              
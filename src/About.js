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

   

    function PokemonData(){

        const myStyle={backgroundImage:`url('https://raw.githubusercontent.com/LukaszPietrzykowski16/pokemonapi/master/src/background/${more.pokemonType[0].type.name}.svg')`};
        return (
            <div className="main" style={myStyle}>
            <div className="pokemon-card" >
              
                <div className="pokemon-card-zero">
                    <h1> {pokemon} </h1>
                </div>
                <div className="pokemon-card-first">
                    <div className="pokemon-card-first-img">
                    <img src={more.pokemonSprites0}></img>
                    </div>
                    <div className="pokemon-card-first-type">
                    {more.pokemonType.map((element) => { return <button className={element.type.name}> {element.type.name}  </button>  })}
                    SHINY
                    </div>
                   
                </div>
                <div className="pokemon-card-second">
                    <div className="pokemond-card-second-abilities">
                        <h3> Pokemon abilities:</h3>
                        <ul>
                            {more.pokemonAbilities.map((element) => {
                            return <li> {element.ability.name} </li>
                            })}
                        </ul>
                    </div>
                    <div className="pokemond-card-second-stats">
                        <h3> Pokemon stats: </h3>
                        {more.pokemonStats.map((element) => {
                            return <span> {element.stat.name}: {element.base_stat} </span>  
                        })}
                 
                    </div>
                  
                   
                </div>
             
            </div>
            </div>
        )
    }

    return (
        <div>
            {isDataFetched ? PokemonData() : 'Error'}
        </div>
        
      
    )
}

export default About;



           
              
import React, {useEffect, useState} from 'react';


const Pokemon = () => {
    const [poke, setPoke] = useState([]);
    

    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(
                  'https://pokeapi.co/api/v2/pokemon/1'
               );
               const data = await response.json();
               const pokemon = ({
                pokemonName: data.name,
                pokemonType: data.types,
                pokemonImg: data.sprites.front_default,
                pokemonId: data.id,
                pokemonStats: data.stats
                });
               setPoke(pokemon);
            } catch (error) {
               console.log(error);
            }
         };
         fetchPost()
    }, [])
   console.log(poke)
    return (
      <>
        <div className='pokemon'>
            {poke.pokemonName}
            <img src={poke.pokemonImg}></img>
        </div>
      </>
    )
}
 

export default Pokemon;
import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"



const pokemonList = [
  {  
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",  
    },  
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    }, 
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", 
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext =() =>{
    setPokemonIndex(pokemonIndex + 1)
  }
  const handleClickPrev =() =>{
    setPokemonIndex(pokemonIndex - 1)
  }
  return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        
        {(pokemonIndex > 0) ? (<button onClick={handleClickPrev}>Précédent</button>) : null}
        {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Suivant</button>) : null}

      </div>
  )
}

export default App

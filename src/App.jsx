import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from './components/NavBar';


const pokemonList = [
  {  
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",  
      cls: " plant",
    },  
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      cls: " fire",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      cls: " water",
    }, 
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", 
      cls: " electric",
    },
    {
      name: " mew",
      cls: " psy",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClic =(index) =>{
    setPokemonIndex(index)
  }
  return (
      <div className={"pok-card" + pokemonList[pokemonIndex].cls}>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <div className='choose-pok'>
          <NavBar pokemonI = {pokemonIndex} setPokemonI={setPokemonIndex} clic ={handleClic} list={pokemonList}/>
        </div>
      </div>
  ) 
}

export default App

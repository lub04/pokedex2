import { useState } from "react";

const NavBar = ({ clic, list, pokemonI, setPokemonI }) => {
  
  return(
    <>
      {list.map((pokemon, index) => (
        <button className="choose" key ={list.name}  onClick={() =>clic(index)}>{pokemon.name}</button>
      ))}
    </>
  )
}
export default NavBar;
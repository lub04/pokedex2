import { useState } from "react";

const NavBar = ({ pokemonI, previous, next, list }) => {
  return(
    <>
      {(pokemonI > 0) ? (<button onClick={previous}>Précédent</button>) : null}
      {(pokemonI < list.length - 1) ? (<button onClick={next}>Suivant</button>) : null}
    </>
  )
}
export default NavBar;
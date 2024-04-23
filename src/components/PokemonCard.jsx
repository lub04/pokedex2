const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",

  },

];

const PokemonCard = () => { 
    const pokemon = pokemonList[1];
    return (
      <figure >
        {pokemon.hasOwnProperty('imgSrc') ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>ce Pokémon n'a pas d'image</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
};
export default PokemonCard ;
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
  const cards = []
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    const card = (
      <figure key={i}>
        {pokemon.hasOwnProperty('imgSrc') ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>ce Pokémon n'a pas d'image</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
    cards.push(card);
  }

  return <div>{cards}</div>;
};
export default PokemonCard ;
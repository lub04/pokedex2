import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => { 
    return (
      <figure className="carte">
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    ); 
};

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default PokemonCard ;
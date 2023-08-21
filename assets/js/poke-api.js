const pokeApi = {};

function convertPokeApiDetailToPokemon(pokemonDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokemonDetail.order;
  pokemon.name = pokemonDetail.name;

  const types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokemon.sprites.other.dream_world.front_default;

  pokemon.types = pokemon.type = pokemon.types.get(0);

  return pokemon;
}

pokeApi.getPokemonsDeatils = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDeatils))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonDetails) => pokemonDetails);
};

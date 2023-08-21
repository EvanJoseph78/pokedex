
function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
        <ol class="types">
            ${pokemon.type.map((type) => `<li class="type">${type}</li>`).join("")}
        </ol>

        <img
            src="${pokemon.photo}"
            alt="${pokemon.name}"
        />
        </div>
    </li>`;
}

const pokemonsList = document.getElementById("pokemonsList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

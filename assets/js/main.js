const pokemonsList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 5;
let offset = 0;

// pokeApi.getPokemons().then((pokemons = []) => {
//   pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
// });

function loadPokemonItens(offset, limit) {
  function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" >
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
        <ol class="types">
            ${pokemon.types
              .map((type) => `<li class="type ${type}">${type}</li>`)
              .join("")}
        </ol>

        <img
            src="${pokemon.photo}"
            alt="${pokemon.name}"
        />
        </div>
    </li>`;
  }
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonsList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  debugger;
  const qtRecordNextPage = offset + limit;

  if (qtRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

const getPokemon = async () => {
  try {
    const request = await axios("https://pokeapi.co/api/v2/pokemon/"); 
    const pokemonData = request.data;
    pokemonData.results.forEach(function (pokemon, index) {
      mostrarPokemon(pokemon, index);
    });

      
    function mostrarPokemon(pokemon, index) {
      const pokemonCard = document.createElement("pokemonCard");
      pokemonCard.innerHTML = `<pokemonCard>
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" 
      src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png'
      alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${pokemon.name.toUpperCase()}</p>
      </div>
              </div>
              </pokemonCard>
              `

       document.body.appendChild(pokemonCard);
    }

  } catch (error) {
    
      error.innerHTML = `<error>
    <p> No se pudo cargar la data  </p>
            </error>
            `

     document.body.appendChild(error);
      
    console.log(error);
  } finally {
    console.log("cargado correctamente");
  }
};
getPokemon();

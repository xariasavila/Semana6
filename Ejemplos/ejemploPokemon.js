/*const arrayNum = [1, 2, 3, 4, 5, 6, 7]
const pokemones = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]

const arrayPokemones = [
  {
    name: "Pikachu",
    type: "Electric",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Bulbasaur",
    type: "Grass",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    name: "Charmander",
    type: "Fire",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    name: "Squirtle",
    type: "Water",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  }
]


// REDUCE CADA ELEMENTO DE UN ARRAY DEVOLVIENDO UN VALOR UNICO
let initialValue = 0;
const reduce = pokemones.reduce(
  (acumulador, next) => acumulador + next.hp,initialValue

);

console.log(reduce);



//AGREGAR NUEVA PROPIEDAD

const pokemonSaludo = arrayPokemones.map(pokemon => {
  if (pokemon.type === "Grass") pokemon.type = "Hierba"
  if (pokemon.type === "Fire") pokemon.type = "Fuego"
  if (pokemon.type === "Water") pokemon.type = "Agua"
  if (pokemon.type === "Electric") pokemon.type = "Eléctrico"
  pokemon.saludo = `Hola soy ${pokemon.name}`
  return pokemon
})
// console.log(pokemonSaludo)

const fireTypePokemon = arrayPokemones.filter(pokemon => pokemon.type === 'Fire')
// console.log(fireTypePokemon);


const getPoke = () => {
  const request =  fetch("https://pokeapi.co/api/v2/pokemon/")
  request.then(response => {
    console.log("response", response);
    response
  });
}

getPoke();
*/

const getPoke = async () => {
  try {
    //se hacen las funciones que quiera ej foreach,
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const response = await request.json();
    console.log(response.results);
  } catch (error) {
    //
    console.log(error);
  } finally {
    console.log("finalizado");
  }
};

getPoke();

//PROMESA
// sumaHP.then((respuesta) => { return respuesta }).catch((error) => { return error })



// SYNC AWAIT

/*const miPromesa =async () =>
{
   await console.log("mi promesa")
}
*/
const getPokemones = async () => { 
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await request.json()
    return data;
  }


// IIFE
const showPokemones = (async () => {

    const pokemon = await getPokemones();
    console.log(pokemon.results);
})();

/*
try {
  
} catch (error) {
  
}
*/

getPokemones().then(data => {
    console.log(data.results)
    // hacemos lo necesario con la data
  })
    .catch(error => console.log("El error es; ", error))
  
    // .innerHTML()
  // console.log(getPokemones());
  
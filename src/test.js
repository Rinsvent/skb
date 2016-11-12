
const array = [
    "https://telegram.me/rinsvent",
    "https://telegram.me/rinsvent123",
    "Https://telegrqwee/rinsvent2",
    "Https://Telegram.me/rinsvent",
    "//telegram.me/rinsvent",
    "http://telegram.me/rinsvent",
    "telegram.me/rinsvent",
    "rinsvent",
    "@rinsvent",
    "https://vk.com/rinsvent",
    "http://vk.com/rinsvent",
    "//vk.com/rinsvent",
    "vk.com/rinsvent",
    "vk.com/rinsvent?wqer=2134",
    "vk.com/rinsvent/profile",
];

array.forEach((url) => {
  const username = canonize(url);
  console.log(username[5]);
});

// 

//const baseUrl = "http://pokeapi.co/api/v2/";
// async function getPokemons(url, i){
//     const response = await fetch(url);
//     const page = await response.json();
//     const pokemons = page.results;
//
//     if(__DEV__ && i> 2) return pokemons;
//
//     if(page.next){
//         const pokemon2 = await getPokemons(page.next, i+1);
//         return [...pokemons, ...pokemon2];
//     }
//     return pokemons;
// }
//
// async function getPokemon(url){
//     const response = await fetch(url);
//     const page = await response.json();
//     return page;
// }

// app.get('/', async function (req, res) {
//     try{
//         const pokemonsInfo = await getPokemons(baseUrl + 'pokemon', 0);
//         const pokemonsPromises = pokemonsInfo.map(info => {return getPokemon(info.url)});
//
//         const fields = ["id","name","base_experience","height","is_default","order","weight"];
//
//         const pokemonsFull = await Promise.all(pokemonsPromises);
//         const pokemons = pokemonsFull.map(pokemon => {
//             return _.pick(pokemon,fields)
//         });
//
//         const sortPokemons = _.sortBy( pokemons, pokemon => -pokemon.weight );
//
//         return res.json(sortPokemons);
//     }catch (err){
//         return res.json({err});
//     }
// })

/*
 app.get('/task2A', async function (req, res) {
 try{
 console.log(req.query.a);
 var a = parseFloat(req.query.a);
 var b = parseFloat(req.query.b);

 var result = 0;
 if(a){
 result += a;
 }
 if(b){
 result += b;
 }
 console.log(result);
 return res.json(result);
 }catch (err){
 return res.json({err});
 }
 })
 */

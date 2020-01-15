class Pokemon {
  constructor(name, img, type){
    this.name = name;
    this.img = img;
    this.type = type;
  }
};

//Kanto
const bulbasaur = new Pokemon(
  "Bulbasaur", 
  "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/100px-001Bulbasaur.png", 
  "Grass"
);

const charmander = new Pokemon(
  "Charmander",
  "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/100px-004Charmander.png",
  "Fire"
);

const squirtle = new Pokemon(
  "Squirtle",
  "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/100px-007Squirtle.png",
  "Water"
);

//Johto
const chikorita = new Pokemon(
  "Chikorita",
  "https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/100px-152Chikorita.png",
  "Grass"
);

const cyndaquil = new Pokemon(
  "Cyndaquil",
  "https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/100px-155Cyndaquil.png",
  "Fire"
);

const totodile = new Pokemon(
  "Totodile",
  "https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/100px-158Totodile.png",
  "Water"
);

//Hoenn
const treeko = new Pokemon(
  "Treeko",
  "https://cdn.bulbagarden.net/upload/thumb/2/2c/252Treecko.png/100px-252Treecko.png",
  "Grass"
);

const torchic = new Pokemon(
  "Torchic",
  "https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/100px-255Torchic.png",
  "Fire"
);

const mudkip = new Pokemon(
  "Mudkip",
  "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/100px-258Mudkip.png",
  "Water"
);

//Sinnoh
const turtwig = new Pokemon(
  "Turtwig",
  "https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/100px-387Turtwig.png",
  "Grass"
);

const chimchar = new Pokemon(
  "Chimchar",
  "https://cdn.bulbagarden.net/upload/thumb/7/76/390Chimchar.png/100px-390Chimchar.png",
  "Fire"
);

const piplup = new Pokemon(
  "Piplup",
  "https://cdn.bulbagarden.net/upload/thumb/b/b1/393Piplup.png/100px-393Piplup.png",
  "Water"
);

//Unova
const snivy = new Pokemon(
  "Snivy",
  "https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/100px-495Snivy.png",
  "Grass"
);

const tepig = new Pokemon(
  "Tepig",
  "https://cdn.bulbagarden.net/upload/thumb/5/5b/498Tepig.png/100px-498Tepig.png",
  "Fire"
);

const oshawott = new Pokemon(
  "Oshawott",
  "https://cdn.bulbagarden.net/upload/thumb/3/3b/501Oshawott.png/100px-501Oshawott.png",
  "Water"
);

//Kalos
const chespin = new Pokemon(
  "Chespin",
  "https://cdn.bulbagarden.net/upload/thumb/c/ca/650Chespin.png/100px-650Chespin.png",
  "Grass"
);

const fennekin = new Pokemon(
  "Fennekin",
  "https://cdn.bulbagarden.net/upload/thumb/3/3d/653Fennekin.png/100px-653Fennekin.png",
  "Fire"
);

const froakie = new Pokemon(
  "Froakie",
  "https://cdn.bulbagarden.net/upload/thumb/1/18/656Froakie.png/100px-656Froakie.png",
  "Water"
);

//Alola
const rowlet = new Pokemon(
  "Rowlet",
  "https://cdn.bulbagarden.net/upload/thumb/7/74/722Rowlet.png/100px-722Rowlet.png",
  "Grass"
);

const litten = new Pokemon(
  "Litten",
  "https://cdn.bulbagarden.net/upload/thumb/0/0e/725Litten.png/100px-725Litten.png",
  "Fire"
);

const popplio = new Pokemon(
  "Popplio",
  "https://cdn.bulbagarden.net/upload/thumb/d/d8/728Popplio.png/100px-728Popplio.png",
  "Water"
);

//Galar
const grookey = new Pokemon(
  "Grookey",
  "https://cdn.bulbagarden.net/upload/thumb/9/93/810Grookey.png/100px-810Grookey.png",
  "Grass"
);

const scorbunny = new Pokemon(
  "Scorbunny",
  "https://cdn.bulbagarden.net/upload/thumb/0/06/813Scorbunny.png/100px-813Scorbunny.png",
  "Fire"
);

const sobble = new Pokemon(
  "Sobble",
  "https://cdn.bulbagarden.net/upload/thumb/9/9b/816Sobble.png/100px-816Sobble.png",
  "Water"
);

// Global Variables
let players = []

const Kanto = [bulbasaur, charmander, squirtle];
const Johto = [chikorita, cyndaquil, totodile];
const Hoenn = [treeko, torchic, mudkip];
const Sinnoh = [turtwig, chimchar, piplup];
const Unova = [snivy, tepig, oshawott];
const Kalos = [chespin, fennekin, froakie];
const Alola = [rowlet, litten, popplio];
const Galar = [grookey, scorbunny, sobble];

const starterFinder = (players, starters) => {
  let results = []
  players.forEach(player => {
    num = Math.floor(Math.random() * starters.length);
    match = {
      player: '',
      pokemon: {}
    };
    match.player = player;
    match.pokemon = starters[num];
    starters.splice(num, 1);
    results.push(match);
  });
  return results;
};

const findGen = (region) => {
  if(region === "Kanto") {
    return Kanto;
  } else if(region === "Johto"){
    return Johto;
  } else if(region === "Hoenn"){
    return Hoenn;
  } else if(region === "Sinnoh"){
    return Sinnoh;
  } else if(region === "Unova"){
    return Unova;
  } else if(region === "Kalos"){
    return Kalos;
  } else if (region === "Alola"){
    return Alola;
  } else if(region === "Galar"){
    return Galar;
  } else {
    console.log("error, gen not found")
  }
};

const makeCards = (results) => {
  console.log(results)
  results.forEach(result => {
    $('#player-cards').append(`
    <div class="player">
      <h2>${result.player}:</h2>
      <div class="pokemon">
        <div class="pokemon-hidden"></div>
        <div class="pokemon-card">
          <h4>${result.pokemon.name}</h4>
          <img src=${result.pokemon.img}>
        </div>
      </div>
    </div>
    `)
  })
};

$("#game-info").submit((event) => {
  event.preventDefault();
  players = [
    $('#player1Name').val(), 
    $('#player2Name').val(), 
    $('#player3Name').val(),
  ];
  let gen = findGen($('#genSelect').val())
  results = starterFinder(players, gen)
  makeCards(results)
});
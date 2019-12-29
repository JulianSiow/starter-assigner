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
  } else if(region === "Galar"){
    return Galar
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
}

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
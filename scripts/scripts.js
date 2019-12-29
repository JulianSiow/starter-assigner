// Global Variables
let players = []

const starters = ['fire', 'water', 'grass']

const starterFinder = (players, starters) => {
  players.forEach(player => {
    num = Math.floor(Math.random() * starters.length);
    match = [];
    match.push(player);
    match.push(starters[num]);
    starters.splice(num, 1);
    console.log(match);
  });
};

$("#game-info").submit((event) => {
  event.preventDefault();
  players = [
    $('#player1Name').val(), 
    $('#player2Name').val(), 
    $('#player3Name').val(),
  ];
  console.log($("#genSelect").val())
  starterFinder(players, starters)
});
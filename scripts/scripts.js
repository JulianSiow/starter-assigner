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

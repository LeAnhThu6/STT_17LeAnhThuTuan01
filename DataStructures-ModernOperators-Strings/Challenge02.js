// Given game data
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    "Neuer",
    "Pavard",
    "Lucas",
    // ... (other player names)
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2030",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1: Loop over the game.scored array and print player names with goal numbers
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// Task 2: Calculate the average odd and log it to the console
const { team1, x: draw, team2 } = game.odds;
const averageOdd = (team1 + draw + team2) / 3;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// Task 3: Print the 3 odds in a nice formatted way
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

// Task 4 (Bonus): Create an object 'scorers' with player names and goal counts
const scorers = {};
game.scored.forEach((player) => {
  scorers[player] = (scorers[player] || 0) + 1;
});

console.log("Scorers:", scorers);

// Given game data
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    "Neuer",
    "Pavard",
    "Lucas",
    "Hernandez",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    "Burke",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Reus",
    "Haaland",
    "Bellarabi",
    "Schwolow",
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

// Task 1: Create player arrays for each team
const players1 = game.players.slice(0, 11); // Team 1 (Bayern Munich) players
const players2 = game.players.slice(11); // Team 2 (Borrussia Dortmund) players

// Task 2: Create goalkeeper and fieldPlayers for Bayern Munich
const [gk, ...fieldPlayers] = players1;

// Task 3: Create an array containing all players of both teams
const allPlayers = [...players1, ...players2];

// Task 4: Create an array with original team1 players plus substitutes
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Task 5: Create variables for each odd
const { team1, x: draw, team2 } = game.odds;

// Task 6: Write a function to print player names and total goals
function printGoals(...players) {
  console.log(`Total goals scored by ${players.length} players:`);
  players.forEach((player) => {
    const goals = game.scored.filter(
      (scoredPlayer) => scoredPlayer === player
    ).length;
    console.log(`${player}: ${goals} goals`);
  });
}

// Task 7: Determine which team is more likely to win
const likelyWinner = team1 < team2 ? game.team1 : game.team2;
console.log(`The team more likely to win is ${likelyWinner}`);

// Test data for Task 6
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Test data for Task 6 with players from game.scored
printGoals(...game.scored);

const scoresOfDolphins1 = [44, 23, 71];
const scoresOfKoalas1 = [65, 54, 49];
const scoresOfDolphins2 = [85, 54, 41];
const scoresOfKoalas2 = [23, 34, 27];

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
const avgDolphins1 = calcAverage(...scoresOfDolphins1);
const avgKoalas1 = calcAverage(...scoresOfKoalas1);
const avgDolphins2 = calcAverage(...scoresOfDolphins2);
const avgKoalas2 = calcAverage(...scoresOfKoalas2);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

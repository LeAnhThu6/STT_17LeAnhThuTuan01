const calcTip = (bill) => bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

// Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [],
  totals = [];

bills.forEach((num) => {
  const tip = calcTip(num);
  tips.push(tip);
  totals.push(num + tip);
});

console.table(
  bills.map((bill, index) => ({
    bill,
    tip: tips[index],
    total: totals[index],
  }))
);

// Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array
const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));

  return sum / arr.length;
};

// Call the function with the 'totals' array
console.log("Avg of totals is:", calcAverage(totals));

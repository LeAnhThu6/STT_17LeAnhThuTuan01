function calcAverageHumanAge(ages) {
  const dogAgesInHumanYears = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const adultDogAges = dogAgesInHumanYears.filter((humanAge) => humanAge >= 18);

  if (adultDogAges.length === 0) {
    return 0; // Return 0 if there are no adult dogs
  }

  const averageAge =
    adultDogAges.reduce((sum, age) => sum + age, 0) / adultDogAges.length;
  return averageAge;
}

const averageAge1 = calcAverageHumanAge(data1);
const averageAge2 = calcAverageHumanAge(data2);

console.log("Test Data 1 - Average Human Age: " + averageAge1);
console.log("Test Data 2 - Average Human Age: " + averageAge2);

const calcAverageHumanAge = (ages) =>
  ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((humanAge) => humanAge >= 18)
    .reduce((total, age, index, array) => total + age / array.length, 0);

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log("Test Data 1 - Average Human Age: " + averageAge1);
console.log("Test Data 2 - Average Human Age: " + averageAge2);

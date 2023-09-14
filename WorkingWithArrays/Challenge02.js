function calcAverageHumanAge(ages) {
  // Step 1: Calculate the dog age in human years
  const humanAges = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  // Step 2: Exclude dogs that are less than 18 human years old
  const adults = humanAges.filter((humanAge) => humanAge >= 18);

  // Step 3: Calculate the average human age of adult dogs
  if (adults.length > 0) {
    const average =
      adults.reduce((total, age) => total + age, 0) / adults.length;
    return average;
  } else {
    return 0; // Return 0 if there are no adult dogs
  }
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const averageAge1 = calcAverageHumanAge(data1);
const averageAge2 = calcAverageHumanAge(data2);

console.log("Test Data 1 - Average Human Age: " + averageAge1);
console.log("Test Data 2 - Average Human Age: " + averageAge2);

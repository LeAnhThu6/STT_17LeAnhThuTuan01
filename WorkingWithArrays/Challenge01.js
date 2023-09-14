function checkDogs(dogsJulia, dogsKate) {
  // Step 1: Create a shallow copy of Julia's array and remove the cat ages
  const correctedJulia = dogsJulia.slice();
  correctedJulia.splice(0, 1); // Remove the first element (cat)
  correctedJulia.splice(-2); // Remove the last two elements (cats)

  // Step 2: Create an array with both Julia's corrected and Kate's data
  const allDogs = [...correctedJulia, ...dogsKate];

  // Step 3: Loop through the array and log whether each dog is an adult or a puppy
  allDogs.forEach((age, i) => {
    const classification = age >= 3 ? "adult" : "puppy";
    console.log(
      `Dog number ${i + 1} is an ${classification}, and is ${age} years old.`
    );
  });
}

// Test data
console.log("Test Data 1:");
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
checkDogs(juliaData1, kateData1);

console.log("\nTest Data 2:");
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];
checkDogs(juliaData2, kateData2);

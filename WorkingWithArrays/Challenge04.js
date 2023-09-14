// Data
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah"] },
  { weight: 32, curFood: 340, owners: ["John"] },
  { weight: 27, curFood: 400, owners: ["Michael"] },
];

// Step 1: Calculate the recommended food portion for each dog
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Step 2: Find Sarah's dog and log if it's eating too much or too little
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (sarahDog) {
  if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
    console.log("Sarah's dog is eating too much!");
  } else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
    console.log("Sarah's dog is eating too little!");
  } else {
    console.log("Sarah's dog is eating an okay amount.");
  }
}

// Step 3: Create arrays for owners of dogs who eat too much or too little
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);

// Step 4: Log the arrays of owners
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// Step 5: Check if any dog is eating exactly the recommended amount
const isAnyDogEatingRecommended = dogs.some(
  (dog) => dog.curFood === dog.recommendedFood
);
console.log(
  `Any dog eating exactly the recommended amount? ${isAnyDogEatingRecommended}`
);

// Step 6: Check if any dog is eating an okay amount
const isAnyDogEatingOkay = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(`Any dog eating an okay amount? ${isAnyDogEatingOkay}`);

// Step 7: Create an array of dogs eating an okay amount
const dogsEatingOkayAmount = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

// Step 8: Create a shallow copy of the 'dogs' array and sort by recommended food portion
const dogsCopySorted = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);

// Output the sorted array
console.log(dogsCopySorted);

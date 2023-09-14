// Given gameEvents map
const gameEvents = new Map([
  [17, " GOAL"],
  [36, " Substitution"],
  [47, " GOAL"],
  [63, " Yellow card"],
  [64, " Yellow card"],
  [69, " Red card"],
  [70, " Substitution"],
  [72, " Substitution"],
  [76, " GOAL"],
  [80, " GOAL"],
  [92, " Red card"],
]);

// Task 1: Create an array 'events' of different game events (no duplicates)
const events = [...new Set(gameEvents.values())];

// Task 2: Remove the unfair yellow card event at minute 64
gameEvents.delete(64);

// Task 3: Calculate and log the average event frequency
const totalMinutes = 90; // A football game has 90 minutes
const eventCount = gameEvents.size;
const averageEventFrequency = totalMinutes / eventCount;
console.log(
  `An event happened, on average, every ${averageEventFrequency.toFixed(
    2
  )} minutes`
);

// Task 4: Loop over 'gameEvents' and log each element with the half information
gameEvents.forEach((event, minute) => {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
});

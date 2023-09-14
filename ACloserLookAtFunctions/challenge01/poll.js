const poll = {
  question: "What is your favourite programming language?",
  options: ["JavaScript", "Python", "Rust", "C++"],
  answers: new Array(4).fill(0), // Initialize the answers array with zeros

  // Method to register a new answer
  registerNewAnswer: function () {
    const input = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );

    const answer = parseInt(input);

    if (!isNaN(answer) && answer >= 0 && answer < this.options.length) {
      this.answers[answer]++;
      this.displayResults();
    } else {
      alert("Invalid input. Please enter a valid option number.");
    }
  },

  // Method to display poll results
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// Test the poll app
document.querySelector("button").addEventListener("click", function () {
  poll.registerNewAnswer();
});

// Bonus: Display results for Data 1 and Data 2
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, "array");
poll.displayResults.call({ answers: data1 }, "string");
poll.displayResults.call({ answers: data2 }, "array");
poll.displayResults.call({ answers: data2 }, "string");

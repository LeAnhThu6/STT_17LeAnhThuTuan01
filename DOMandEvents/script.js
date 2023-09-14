// Khai báo biến ban đầu
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

// Hàm tạo số ngẫu nhiên từ 1 đến 20
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Hàm cập nhật điểm và hiển thị
function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

// Sự kiện click nút "Check"
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Kiểm tra xem người chơi đã đoán đúng số chưa
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ Vui lòng nhập số!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Chính xác!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    // Cập nhật điểm cao nhất
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Quá cao!" : "📉 Quá thấp!";
      score--;
      displayScore(score);
    } else {
      document.querySelector(".message").textContent = "💥 Bạn đã thua cuộc!";
      displayScore(0);
    }
  }
});

// Sự kiện click nút "Again"
document.querySelector(".again").addEventListener("click", function () {
  // Khôi phục giá trị ban đầu
  secretNumber = generateRandomNumber();
  score = 20;

  // Cập nhật giao diện
  document.querySelector(".message").textContent = "Start guessing...";
  displayScore(score);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});

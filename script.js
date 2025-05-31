function spin() {
  const result = document.getElementById("result");
  const prizes = ["৳10", "৳20", "৳0", "৳50"];
  const randomIndex = Math.floor(Math.random() * prizes.length);
  result.textContent = "You won " + prizes[randomIndex] + "!";
}

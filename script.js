const spinBtn = document.getElementById('spinBtn');
const wheel = document.getElementById('wheel');
const resultBox = document.getElementById('result');

const rewards = [
  '৳5 জিতেছেন',
  '৳10 জিতেছেন',
  '৳50 জিতেছেন',
  '৳0 লস',
  '৳20 জিতেছেন',
  '৳0 লস',
  '৳100 জিতেছেন'
];

spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  resultBox.textContent = "ঘুরছে...";

  const randomDeg = Math.floor(Math.random() * 3600) + 720;
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${randomDeg}deg)`;

  setTimeout(() => {
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    resultBox.textContent = reward;
    spinBtn.disabled = false;
  }, 4000);
});

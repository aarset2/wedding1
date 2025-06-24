// Set the target date
const targetDate = new Date('2025-09-29T00:00:00'); // Change to PR estimate

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('timer').innerHTML = 'Finalmente estas en casa ❤️';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  document.getElementById(
    'timer'
  ).innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos`;
}

setInterval(updateCountdown, 1000);

const START_DATE = new Date("2025/01/27");

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();

  if (days < 0) {
    months--;
    const lastMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += lastMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let hours = now.getHours() - START_DATE.getHours();
  let minutes = now.getMinutes() - START_DATE.getMinutes();
  let seconds = now.getSeconds() - START_DATE.getSeconds();

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }
  if (days < 0) {
    months--;
    const lastMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += lastMonthDays;
  }

  // Ajusta meses negativos de novo
  if (months < 0) {
    years--;
    months += 12;
  }

  // --- FORMATAÇÃO (sempre 2 dígitos) ---
  const formatNumber = (num) => (num < 10 ? "0" + num : num);

  // --- ATUALIZAÇÃO NO HTML ---
  document.getElementById("years").innerText = formatNumber(years);
  document.getElementById("months").innerText = formatNumber(months);
  document.getElementById("days").innerText = formatNumber(days);
  document.getElementById("hours").innerText = formatNumber(hours);
  document.getElementById("minutes").innerText = formatNumber(minutes);
  document.getElementById("seconds").innerText = formatNumber(seconds);
}

// Inicia ao carregar
updateCounter();

// Atualiza a cada 1 segundo
setInterval(updateCounter, 1000);


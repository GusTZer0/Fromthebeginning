const START_DATE = new Date(2025, 0, 27);

function updateCounter() {
  const now = new Date();
  let diff = now - START_DATE;

  const msSecond = 1000;
  const msMinute = msSecond * 60;
  const msHour = msMinute * 60;
  const msDay = msHour * 24;

  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor(diff / msDay);
  const restTime = diff - totalDays * msDay;

  const hours = Math.floor(restTime / msHour);
  const minutes = Math.floor((restTime % msHour) / msMinute);
  const seconds = Math.floor((restTime % msMinute) / msSecond);

  const format = (n) => (n < 10 ? "0" + n : n);

  document.getElementById("years").innerText = format(years);
  document.getElementById("months").innerText = format(months);
  document.getElementById("days").innerText = format(days);
  document.getElementById("hours").innerText = format(hours);
  document.getElementById("minutes").innerText = format(minutes);
  document.getElementById("seconds").innerText = format(seconds);
}

updateCounter();
setInterval(updateCounter, 1000);

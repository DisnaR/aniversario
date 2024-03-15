function updateCountdown() {
  const birthday = new Date('2024-04-12');
  const currentDate = new Date();
  
  const difference = birthday - currentDate;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById('days').getElementsByClassName('counter-value')[0].innerText = formatTime(days);
  document.getElementById('hours').getElementsByClassName('counter-value')[0].innerText = formatTime(hours);
  document.getElementById('minutes').getElementsByClassName('counter-value')[0].innerText = formatTime(minutes);
  
  document.getElementById('days').getElementsByClassName('counter-text')[0].innerText = (days === 1) ? 'Dia' : 'Dias';
  document.getElementById('hours').getElementsByClassName('counter-text')[0].innerText = (hours === 1) ? 'Hora' : 'Horas';
  document.getElementById('minutes').getElementsByClassName('counter-text')[0].innerText = (minutes === 1) ? 'Minuto' : 'Minutos';
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateCountdown();
setInterval(updateCountdown, 1000);
function updateCountdown() {
  const birthday = new Date('2024-04-12');
  const currentDate = new Date();
  
  const difference = birthday - currentDate;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById('days').getElementsByClassName('counter-value')[0].innerText = formatTime(days);
  document.getElementById('hours').getElementsByClassName('counter-value')[0].innerText = formatTime(hours);
  document.getElementById('minutes').getElementsByClassName('counter-value')[0].innerText = formatTime(minutes);
  
  document.getElementById('days').getElementsByClassName('counter-text')[0].innerText = (days === 1) ? 'Dia' : 'Dias';
  document.getElementById('hours').getElementsByClassName('counter-text')[0].innerText = (hours === 1) ? 'Hora' : 'Horas';
  document.getElementById('minutes').getElementsByClassName('counter-text')[0].innerText = (minutes === 1) ? 'Minuto' : 'Minutos';
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateCountdown();
setInterval(updateCountdown, 1000);
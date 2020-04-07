
const colors = [
  "#213956",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];


const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

const changeColor = () => {
let color = randomIntegerFromInterval(0, colors.length - 1);
body.bgColor = colors[color];
}

const startChange = () => {
btnStart.disabled = true;
intervalId = setInterval(changeColor, 1000);
}

const stopChange = () => {
clearInterval(intervalId);
btnStart.disabled = false;
}

btnStart.addEventListener('click', startChange);
btnStop.addEventListener('click', stopChange);
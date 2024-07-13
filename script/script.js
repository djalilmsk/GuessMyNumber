const userInput = document.getElementById('text');
const check = document.getElementById('check');
const again = document.getElementById('again');
const score = document.getElementById('score');
const height = document.getElementById('height');
const hint = document.getElementById('hint');
const body = document.querySelector('body');
const win = document.getElementById('the-number');
let number = Math.floor(Math.random() * 100) + 1;
let refresh = false;

check.onclick = function () {
  if (parseInt(userInput.value) === number) {
    hint.innerHTML = 'You win!';
    body.style.backgroundColor = 'green';
    win.innerHTML = number;
  } else {
    if (parseInt(userInput.value) <= number - 30) {
      hint.innerHTML = 'Too Low';
      score.innerHTML = parseInt(score.innerHTML) - 4;
    } else if (parseInt(userInput.value) <= number - 10) {
      hint.innerHTML = 'Close But Low';
      score.innerHTML = parseInt(score.innerHTML) - 2;
    } else if (parseInt(userInput.value) < number) {
      hint.innerHTML = 'So Close But Low';
      score.innerHTML = parseInt(score.innerHTML) - 1;
    } else if (parseInt(userInput.value) >= number + 30) {
      hint.innerHTML = 'Too High';
      score.innerHTML = parseInt(score.innerHTML) - 4;
    } else if (parseInt(userInput.value) >= number + 10) {
      hint.innerHTML = 'Close But High';
      score.innerHTML = parseInt(score.innerHTML) - 2;
    } else if (parseInt(userInput.value) > number) {
      hint.innerHTML = 'So Close But High';
      score.innerHTML = parseInt(score.innerHTML) - 1;
    }
  }

  if (parseInt(score.innerHTML) <= 0) {
    hint.innerHTML = 'You Lose!';
    body.style.backgroundColor = 'red';
  }
};

again.onclick = function () {
  if (hint.innerHTML == 'You win!'){
    if (parseInt(score.innerHTML) > parseInt(height.innerHTML)) {
      height.innerHTML = score.innerHTML;
    }
  }
  refresh = true;
  number = Math.floor(Math.random() * 100) + 1;
  body.style.backgroundColor = '#333434';
  score.innerHTML = '40';
  hint.innerHTML = 'Enter Your Number';
  userInput.value = '';
  win.innerHTML = '?';
};

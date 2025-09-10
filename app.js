let _116 = document.querySelector('#_116');
let _112 = document.querySelector('#_112');
let _108 = document.querySelector('#_108');
let _102 = document.querySelector('#_102');
let losingIsAnswered = false;
let firstQuest = document.querySelector('#firstQuest');

_116.addEventListener('click', function () {
  if(!losingIsAnswered) {
    _116.style.backgroundColor = 'red';
    _116.style.color = 'white';
    firstQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    losingIsAnswered = true;
  }
});

_112.addEventListener('click', function () {
  if(!losingIsAnswered) {
    _112.style.backgroundColor = 'red';
    _112.style.color = 'white';
    firstQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    losingIsAnswered = true;
  }
});

_108.addEventListener('click', function () {
  if(!losingIsAnswered) {
    _108.style.backgroundColor = 'rgb(25, 255, 25)';
    _108.style.color = 'white';
    firstQuest.insertAdjacentHTML('afterend', '<h5 class="right">Good Job</h5>');
    losingIsAnswered = true;
  }
});

_102.addEventListener('click', function () {
  if(!losingIsAnswered) {
    _102.style.backgroundColor = 'red';
    _102.style.color = 'white';
    firstQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    losingIsAnswered = true;
  }
});

let wilt = document.querySelector('#wilt');
let ai = document.querySelector('#ai');
let dr = document.querySelector('#dr');
let jojo = document.querySelector('#jojo');
let playoffLeaderIsAnswered = false;
let secondQuest = document.querySelector('#secondQuest');

wilt.addEventListener('click', function () {
  if(!playoffLeaderIsAnswered) {
    wilt.style.backgroundColor = 'red';
    wilt.style.color = 'white';
    secondQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    playoffLeaderIsAnswered = true;
  }
});

ai.addEventListener('click', function () {
  if(!playoffLeaderIsAnswered) {
    ai.style.backgroundColor = 'rgb(25, 255, 25)';
    ai.style.color = 'white';
    secondQuest.insertAdjacentHTML('afterend', '<h5 class="right">Good Job! 30.6 PPG during the playoffs</h5>');
    playoffLeaderIsAnswered = true;
  }
});

dr.addEventListener('click', function () {
  if(!playoffLeaderIsAnswered) {
    dr.style.backgroundColor = 'red';
    dr.style.color = 'white';
    secondQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    playoffLeaderIsAnswered = true;
  }
});

jojo.addEventListener('click', function () {
  if(!playoffLeaderIsAnswered) {
    jojo.style.backgroundColor = 'red';
    jojo.style.color = 'white';
    secondQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
    playoffLeaderIsAnswered = true;
  }
});

let cov = document.querySelector('#cov');
let kyle = document.querySelector('#kyle');
let tobi = document.querySelector('#tobi');
let ai3 = document.querySelector('#ai3');
let thirdQuestIsAnswered = false;
let thirdQuest = document.querySelector('#thirdQuest');

cov.addEventListener('click', function () {
  if(!thirdQuestIsAnswered) {
    cov.style.backgroundColor = 'rgb(25, 255, 25)';
    cov.style.color = 'white';
    thirdQuestIsAnswered = true;
    thirdQuest.insertAdjacentHTML('afterend', '<h5 class="right">Great job! He averaged 2.4 3FGM/gm</h5>');
  }
});

kyle.addEventListener('click', function () {
  if(!thirdQuestIsAnswered) {
    kyle.style.backgroundColor = 'red';
    kyle.style.color = 'white';
    thirdQuestIsAnswered = true;
    thirdQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
  }
});

tobi.addEventListener('click', function () {
  if(!thirdQuestIsAnswered) {
    tobi.style.backgroundColor = 'red';
    tobi.style.color = 'white';
    thirdQuestIsAnswered = true;
    thirdQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
  }
});

ai3.addEventListener('click', function () {
  if(!thirdQuestIsAnswered) {
    ai3.style.backgroundColor = 'red';
    ai3.style.color = 'white';
    thirdQuestIsAnswered = true;
    thirdQuest.insertAdjacentHTML('afterend', '<h5 class="wrong">Wrong!</h5>');
  }
});
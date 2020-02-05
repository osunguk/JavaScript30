const displayLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const timer = document.querySelectorAll('.timer__button');
let countdown

function getTime() {
  const second = this.dataset.time;
  calcTime(second);
}

function calcTime(second) {
  clearInterval(countdown);
  const endTime = Date.now() + (second * 1000);
  showEndTime(endTime);
  showLeftTime(second);
  countdown = setInterval(() => {
    const leftTime = Math.round((endTime - Date.now()) / 1000)
    if (leftTime < 0) {
      clearInterval(countdown);
      return;
    }
    showLeftTime(leftTime);
  }, 1000);
}

function showEndTime(endTime) {
  const end = new Date(endTime)
  const hour = end.getHours()
  const min = end.getMinutes()
  const result = `Be Back At ${hour}:${min < 10 ? '0' : ''}${min}`;
  displayEndTime.textContent = result
}

function showLeftTime(leftTime) {
  const min = Math.floor(leftTime / 60);
  const second = leftTime % 60;
  const result = `${min}:${second < 10 ? '0' : ''}${second}`;
  document.title = result
  displayLeft.textContent = result
}

timer.forEach(time => {
  time.addEventListener('click', getTime);
});

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  calcTime(this.minutes.value * 60);
})

let __timerInterval = false;

export default function startTimer(elementClass, deadline) {
  const timerElement = document.getElementsByClassName(elementClass)[0];

  if (!timerElement) {
    return false;
  }

  const timer = {
    days: timerElement.querySelector(`.${elementClass}__days`),
    hours: timerElement.querySelector(`.${elementClass}__hours`),
    minutes: timerElement.querySelector(`.${elementClass}__minutes`),
    seconds: timerElement.querySelector(`.${elementClass}__seconds`),
  };

  updateTimer(timer, deadline);
  __timerInterval = setInterval(updateTimer.bind(null, timer, deadline), 1000);
}

function updateTimer(timer, deadline) {
  const timeRemaining = calculateTimeRemaining(deadline);

  if (timeRemaining.total <= 0) {
    clearInterval(__timerInterval);
  }

  timer.days.textContent = addLeadingZeroes(timeRemaining.days);
  timer.hours.textContent = addLeadingZeroes(timeRemaining.hours);
  timer.minutes.textContent = addLeadingZeroes(timeRemaining.minutes);
  timer.seconds.textContent = addLeadingZeroes(timeRemaining.seconds);
}

function calculateTimeRemaining(deadline) {
  const timeLeftInSeconds = Math.floor((Date.parse(deadline) - Date.now()) / 1000);

  if (timeLeftInSeconds <= 0) {
    return {
      total: -1,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    total: timeLeftInSeconds,
    days: Math.floor( timeLeftInSeconds / 86400 ),
    hours: Math.floor( timeLeftInSeconds / 3600 % 24 ),
    minutes: Math.floor( timeLeftInSeconds / 60 % 60 ),
    seconds: Math.floor( timeLeftInSeconds % 60 ),
  };
}

function addLeadingZeroes(value) {
  return ('0' + value).slice(-2);
}

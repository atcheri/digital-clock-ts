const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const zone = document.querySelector('.zone');
const zoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
zone!.innerHTML = zoneName.split('/')[1] || "";

const second = 1000;

const prefixWithZero = (a: number) => {
  return a < 10 ? `0${a.toString()}` : a.toString();
};

const id = setInterval(() => {
  if (!hours || !minutes || !seconds) {
    return;
  }
  const now = new Date();
  hours.innerHTML = prefixWithZero(now.getHours());
  minutes.innerHTML = prefixWithZero(now.getMinutes());
  seconds.innerHTML = prefixWithZero(now.getSeconds());
}, second);

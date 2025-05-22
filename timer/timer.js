function startTimer() {
  var t = document.getElementById("seconds").value;
  const element = document.getElementById("display");
  element.innerHTML = t;

  interval = setInterval(function () {
    if (t >= 0) {
      element.innerHTML = t;
      t--;
    }
  }, 1000);
}
function reset() {
  clearInterval(interval);
  t = 0;
  const element = document.getElementById("display");
  element.innerHTML = 0;
  document.getElementById("seconds").value = 0;
}

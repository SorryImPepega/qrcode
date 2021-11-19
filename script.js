buttons = document.querySelectorAll('.buttonMine');

anime({
  targets: buttons,
  duration: 500,
  translateY: 10,
  loop: true,
  direction: 'alternate',
  easing: 'linear',
  background: "linear-gradient(to right, #c9ffbf, #ffafbd)"
});

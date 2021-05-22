const input = document.querySelector('.slider__input')
const first = document.querySelector('.example__img-skinny')
const second = document.querySelector('.example__img-fat')

input.addEventListener('input', function(e) {
  const value = e.target.value;
  first.style.width = value + '%';
  second.style.width = (100 - value) + '%';
});

const input = document.querySelector('.slider__input')
const fat = document.querySelector('.example__img-fat')
const skinny = document.querySelector('.example__img-skinny')

input.addEventListener('input', function(e) {
  const value = e.target.value;
  fat.style.width = value + '%';
  skinny.style.width = (100 - value) + '%';
})

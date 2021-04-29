const input = document.querySelector('.slider__input')
//const counter = document.querySelector('.slider__slide')
const first = document.querySelector('.example__img-fat')
const second = document.querySelector('.example__img-notfat')

input.addEventListener('input', function(e) {
  const value = e.target.value;
  //counter.innerText = value;

  first.style.width = value + '%'
  second.style.width = (100 - value) + '%'
})

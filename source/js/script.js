let menu = document.querySelector('.menu');
let imgx = document.querySelector('.img-x');
let imgburger = document.querySelector('.img-burger');
let toggle = document.querySelector('.toggle');

toggle.onclick = function() {
  menu.classList.toggle('block');
  menu.classList.toggle('none');
  imgx.classList.toggle('block');
  imgx.classList.toggle('none');
  imgburger.classList.toggle('none');
  imgburger.classList.toggle('block');
};

const input = document.querySelector('.slider__input')
//const counter = document.querySelector('.slider__slide')
const first = document.querySelector('.example__img-skinny')
const second = document.querySelector('.example__img-fat')

input.addEventListener('input', function(e) {
  const value = e.target.value;
  //counter.innerText = value;

  first.style.width = value + '%'
  second.style.width = (100 - value) + '%'
})

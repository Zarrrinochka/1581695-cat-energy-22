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

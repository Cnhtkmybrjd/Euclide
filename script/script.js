// Бургер меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', 
  function(){

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Поиск
let search = document.querySelector('.header__search')
let headerInput = document.querySelector('.header__input')
let find = document.querySelector('.find');
let close = document.querySelector('.close');

search.addEventListener('click', 
function(){
  headerInput.classList.toggle('header__input--active');
})

close.addEventListener('click', 
function(){
  headerInput.classList.remove('header__input--active');
})

// Слайдер
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper (slider, {
  slidersPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  alli: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  loop: true,
})

// Табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// Аккардион

new Accordion('.list', {
  elementClass: 'list__item',
  triggerClass: 'list__item-open',
  panelClass: 'list__item-bottom',
  activeClass: 'accordion--active',
});

//Создаем переменную, в котором положем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
/*console.log(menuToggle);*/
//Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
//Отслеживаем клик по кнопке меню и запускаем функцию

menuToggle.addEventListener('click', function(event){
  /*console.log('Клик по кнопке меню');*/
  //Отменяем стандартное поведение ссылки
  event.preventDefault();
  //Вешаем класс на меню, когда кликнули по кнопке
  menu.classList.toggle('visible');
})
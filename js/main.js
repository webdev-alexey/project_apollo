$(document).ready(function () {
  // Скрипт для показа и скрытия выпадающего меню на смартфонах
  // Создаем переменые для кнопки и для меню
  var pull = $("#navigation-toggle");
  var menu = $(".navigation ul");

  // Описываем событие при нажатии на кнопку
  $(pull).on("click", function (e) {
    // Отменяем стандартное поведение ссылки в браузере
    e.preventDefault();

    // Открываем/Скрываем меню
    menu.slideToggle();

    // Добавляем модификатор --active
    $(this).toggleClass("navigation__toggle-button--active");
  });

  // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 992) {
      menu.removeAttr("style");
    }
  });

  // Вызов слайдера owl-сarousel
  $("#top-slider").owlCarousel({
    singleItem: true, //отображать один слайд
    navigation: true, //отображает стрелки влево, вправо
    theme: "top-slider-theme", //наша новая тема
    navigationText: ["", ""], //убирает текст с кнопок (лево, право)
  });
});

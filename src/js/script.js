$(document).ready(function () {
    $('.header-bottom__list').bxSlider({});
});

$(document).ready(function () {
  $('.content-var__list').bxSlider({});
});


// dropdown

$('.footer__inf-mobile').on('click', e => {
  e.preventDefault()

  const dropDown = $('.dropdown')

  dropDown.addClass('dropdown__active');
});

$('.dropdown__close').on('click', e => {
  e.preventDefault()

  const dropDown = $('.dropdown')

  dropDown.removeClass('dropdown__active');
});
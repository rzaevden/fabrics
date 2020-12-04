$(document).ready(function () {
    $('.header-bottom__list').bxSlider({});
});

$(document).ready(function () {
  $('.content-var__list').bxSlider({});
});


// dropdown

$('.footer__dropdown-link').on('click', e => {
  e.preventDefault()

  const dropDown = $('.footer__dropdown')

  dropDown.addClass('dropdown__active');
});

$('.footer__dropdown-cross').on('click', e => {
  e.preventDefault()

  const dropDown = $('.footer__dropdown')

  dropDown.removeClass('dropdown__active');
});
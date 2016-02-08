var bindMenu = function() {
  $('.icon-menu').click(moveMenu);
  $('.icon-close').click(moveMenu);
};

var moveMenu = function() {
  $('.full-menu').toggleClass('full-menu--open');
}

var closeMenu = function() {
  $('.full-menu').toggleClass('full-menu--open');
}

var openMenu = function() {
  $('.menu').animate({
    left: "0px"
  }, 200);

  $('body').animate({
    left: "250px"
  }, 200);
}

$(document).ready(bindMenu);
$(document).on('page:load', bindMenu);

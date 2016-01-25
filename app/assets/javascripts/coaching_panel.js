var bindMenu = function() {
  $('.icon-menu').click(moveMenu)
  $('.icon-close').click(moveMenu);
};

var moveMenu = function() {
  var $menu = $('.menu')
  if ($menu.position().left == 0) {
    closeMenu();
  } else {
    openMenu();
  }
}

var closeMenu = function() {
  $('.menu').animate({
    left: "-250px"
  }, 200);

  $('body').animate({
    left: "0px"
  }, 200);
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

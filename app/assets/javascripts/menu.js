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

$(document).ready(bindMenu);
$(document).on('page:load', bindMenu);

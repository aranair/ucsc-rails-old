$(document).ready(function() {
  $('.ui.dropdown').dropdown();
  $('body').scrollspy({ target: '#home-top-navbar' })

  // var parallax = document.querySelectorAll(".parallax"),
  //     speed = 0.5;

  // window.onscroll = function(){
  //   [].slice.call(parallax).forEach(function(el,i){

  //     var windowYOffset = window.pageYOffset,
  //         elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

  //     el.style.backgroundPosition = elBackgrounPos;

  //   });
  // };

});

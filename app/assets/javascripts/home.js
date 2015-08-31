function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(44.5403, -78.5463),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var mapCanvas = document.getElementById('map');
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

$(document).ready(function() {
  $('.ui.dropdown').dropdown();
  google.maps.event.addDomListener(window, 'load', initialize);

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

});

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
});

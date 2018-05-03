
var map;
var bigLat = 59.93910591028313,
  bigLng = 30.318416256314094,
  smallLat = 59.9387942,
  smallLng = 30.3230833;
var lat, lng, latLng;

function initMap() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    latLng = new google.maps.LatLng(bigLat,bigLng);
  } else {
    latLng = new google.maps.LatLng(smallLat,smallLng);
  }

  map = new google.maps.Map(document.querySelector(".contacts__map"), {
    center: latLng,
    zoom: 17
  });
  var image = "../img/map-pin.png";
  var marker = new google.maps.Marker({
    position: {lat: 59.9387942, lng: 30.3230833},
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Cat Energy",
    icon: image
  });

  google.maps.event.addDomListener(window, "resize", function() {
    var latLng;
    if (window.matchMedia("(min-width: 1300px)").matches) {
      latLng = new google.maps.LatLng(bigLat,bigLng);
    } else {
      latLng = new google.maps.LatLng(smallLat,smallLng);
    }
    map.setCenter(latLng);
  });
}

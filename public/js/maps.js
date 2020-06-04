var map, infoWindow;

$(document).ready(function(){
  initMap();
})



function initMap() {

  // var beverlyHills = {lat: 34.063900, lng: -118.360200};

  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14, 
  // center: beverlyHills, 
  styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{visibility: 'off'}]
          }
        ]
});






infoWindow = new google.maps.InfoWindow;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({
      position: pos, 
      map: map, 
      icon: "TT_images/sailor.png"
      });

      infoWindow.setPosition(pos);
      infoWindow.setContent('Go Drink!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter())
    });

  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);


  
// place search + click event
//   var request = {
//     query: 'Museum of Contemporary Art Australia',
//     fields: ['name', 'geometry'],
//   };

//   service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }
//   function createMarker(place) {
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });

}
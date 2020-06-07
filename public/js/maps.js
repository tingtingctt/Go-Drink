var map, infoWindow;

$(document).ready(function () {
  initMap();
  dropMarkers()
})


var markers = [
  {
    name: "Exchange LA",
    type: "nightclub",
    coords: {lat: 34.063900, lng: -118.360200},
  },
  {
    name: "Academy LA",
    type: "nightclub",
    coords: { lat: 34.1020, lng: -118.3209 },
  },
  {
    name: "Vibrato Grill Jazz",
    type: "jazz",
    coords: { lat: 34.127257, lng: -118.4457937 },
  },
  {
    name: "BlueWhale",
    type: "jazz",
    coords: { lat: 34.0499, lng: -118.2421 },
  },
  {
    name: "Pips On Labrea",
    type: "jazz",
    coords: { lat: 34.0485, lng: -118.3442 },
  },
  {
    name: "Perry's Beach Cafe",
    type: "cafe",
    coords: { lat: 34.0157309, lng: -118.5015921 },
  },
];

var icons = {
  jazz: {
    icon: "TT_images/jazz.png"
  },
  nightclub: {
    icon: "TT_images/nightclub.png"
  },
  cafe: {
    icon: "TT_images/cafe.png"
  }
};

// var beverlyHills = {lat: 34.063900, lng: -118.360200};
// var exchangeLA = { lat: 34.0453, lng: -118.2513 };
// var academyLA = { lat: 34.1020, lng: -118.3209 };
// var vibratoJazz = { lat: 34.127257, lng: -118.4457937 };
// var blueWhaleJazz = { lat: 34.0499, lng: -118.2421 };
// var pipsJazz = { lat: 34.0485, lng: -118.3442 };
// var space = { lat: 29.5602853, lng: -95.0853914 };
// var beachCafe = { lat: 34.0157309, lng: -118.5015921 };



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    // center: beverlyHills, 
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        // stylers: [{ color: '#1f2835' }]
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
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
    }, function () {
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
}


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

  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.setContent(place.name);
  //   infowindow.open(map, this);
  // });

function dropMarkers(){
  for (i=0; i<markers.length; i++){
    var venue = new google.maps.Marker({
      position: markers[i].coords,
      map: map,
      icon: icons[markers[i].type].icon});
      
      google.maps.event.addListener(venue, 'click', function () {
        // infowindow.setContent(markers[i].name);
        // infowindow.open(map, this);
          // panorama(markers[i].coords);
          console.log(markers[i].name);
      });
  }
}




// function dropMarker (){
//   var club = new google.maps.Marker({
//    position: academyLA,
//    map: map,
//    icon: "TT_images/disco.png"
//  });

// google.maps.event.addListener(club, 'click', function () {
//    // infowindow.setContent(place.name);
//    // infowindow.open(map, this);
//      panorama();
//  });
// } 

function panorama(location) {
  $("#map").attr("style", "display:none");
  $("#street-view").attr("style", "display:block");
  // $("#club").attr("style", "display:block");
  var panorama;
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      position: location,
      pov: { heading: 165, pitch: 0 },
      zoom: 1
    });
}


$("#partyOn").on("click", function () {
  $("#club").attr("style", "display:block");
  $("#avatar").attr("style", "animation:dance 2s infinite");
});

$("#beachOn").on("click", function () {
  // $("#club").attr("style", "display:block");
  $("#avatar").attr("src", "TT_images/beach.gif");
});

$("#partyOff").on("click", function () {
  $("#club").attr("style", "display:none");
  $("#avatar").attr("style", "animation:none");
  $("#avatar").attr("src", "TT_images/sailor-moon.gif");
})

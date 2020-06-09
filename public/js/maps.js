var map, infoWindow, pos;
// var user;

var user = {
  name: "Sailor Moon",
  email: "s@s.com",
  preference: "jazz"
}

$(document).ready(function () {
    // $.get("/api/venues").then(function(data) {
  //   for (i=0; i<data.length; i++){
  //     all.push(data[i])
  //   }
  // });

  // $.get("/api/user/:id").then(function(data) {
  //     user = data;
  // });

  initMap();
  defaultMarkers();
});

var markers = [];

var all = [
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

// var beverlyHills = {lat: 34.063900, lng: -118.360200};
// var space = { lat: 29.5602853, lng: -95.0853914 };

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
      pos = {
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

$(document).on('click', ".pano", function(){
  panorama(all[$(this).parent('div').attr("id")].coords)
})

$(document).on('click', ".directions", function(){
  calculateAndDisplayRoute(all[$(this).parent('div').attr("id")].coords)
})


function dropAll() {
  clearMarkers();
  for (var i = 0; i < all.length; i++) {
    addMarkerWithTimeout({...all[i],i}, i * 200);
  }
}

function addMarkerWithTimeout(venue, timeout) {
  console.log(venue)
  window.setTimeout(function() {
    const newMarker = new google.maps.Marker({
      position: venue.coords,
      map: map,
      icon: icons[venue.type].icon,
      animation: google.maps.Animation.DROP
    })
    google.maps.event.addListener(newMarker, "click", function(){
      infoWindow.setContent(
        `<div id=${venue.i}><h5 id='title'> ${venue.name} \n </h5> <p>Type: ${venue.type} \n</p> <p>Position: ${newMarker.position}\n</p> <button class='btn btn-dark btn-sm pano'>TELEPORT</button> &nbsp; <button class='btn btn-dark btn-sm directions'>Directions</button></div>`);
      infoWindow.open(map,newMarker)
    })
    markers.push(newMarker);
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}




function defaultMarkers(){
  for (i=0; i<all.length; i++){
    if (user.preference === all[i].type){
      addMarkerWithTimeout({...all[i],i}, i * 200);
        
      // google.maps.event.addListener(markers[markers.length-1], 'click', function () {
      //   // infowindow.setContent(all[i].name);
      //   // infowindow.open(map, this);
      //     // panorama(all[i].coords);
      //     console.log(all[i].name);
      // });
    }
  }
}




function calculateAndDisplayRoute(destination = {lat: 34.1020, lng: -118.3209}) {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  directionsService.route(
      {
        origin: pos,
        destination,
        travelMode: 'DRIVING'
      },
      function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
}



function panorama(location) {
  $("#map").attr("style", "display:none");
  $("#street-view").attr("style", "display:block");
  var panorama;
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      position: location,
      pov: { heading: 165, pitch: 0 },
      zoom: 1
    });
}


function back(){
    $("#map").attr("style", "display:block");
    $("#street-view").attr("style", "display:none");
}

// $("#back").on("click", function () {
//   $("#map").attr("style", "display:block");
//   $("#street-view").attr("style", "display:none");
// });


$("#direction").on("click", function () {
  calculateAndDisplayRoute();
});


$("#cheesy").on("click", function () {
  $("#canvas").attr("style", "display:block");
  daisy();
});

$("#partyOn").on("click", function () {
  $("#club").attr("style", "display:block");
  $("#avatar").attr("style", "animation:dance 2s infinite");
});

$("#beachOn").on("click", function () {
  $("#avatar").attr("src", "TT_images/beach.gif");
});

$("#partyOff").on("click", function () {
  $("#club").attr("style", "display:none");
  $("#canvas").attr("style", "display:none");
  $("#avatar").attr("style", "animation:none");
  $("#avatar").attr("src", "TT_images/sailor-moon.gif");
})





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



var ctx;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 10;
var fallingDrops = [];
var canvas = document.querySelector("#canvas");

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i=0; i< noOfDrops; i++){
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); 
        fallingDrops[i].y += fallingDrops[i].speed; 
        if (fallingDrops[i].y > window.innerHeight + 70) { 
            fallingDrops[i].y = -70 
            fallingDrops[i].x = Math.random() * window.innerWidth;   
        }
    }
}

function daisy() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        setInterval(draw, 36);

        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            fallingDr.image.src = 'TT_images/daisy.png';
            fallingDr["x"] = Math.random() * window.innerWidth;
            fallingDr["y"] = Math.random() * 5;
            fallingDr["speed"] = 3 + Math.random() * 5;
            fallingDrops.push(fallingDr);
        }
    }  
}





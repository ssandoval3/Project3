function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.929637, -87.738234);
	var mapOptions = {
	  center: myLocation,
	  zoom: 17,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
		  position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
	  position: myLocation,
	  map: myMap,
	  animation: google.maps.Animation.DROP,
	});

	var contentString1 = '<h1>Kelvyn Park</h1><p>This is Kelvyn Park, my neighborhood park. This is where I play a lot of soccer with my friends and made a lot of memories with my family.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
  	});
	
	const BusRoute = [
      {lat: 41.924183, lng: -87.736900},
      {lat:41.925168, lng: -87.652820},
    ];
	
    const trainRoute = new google.maps.Polyline({
      path: trainRouteCoordinates,
      geodesic: true,
      strokeColor: "blue",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    trainRoute.setMap(map);
}

google.maps.event.addDomListener(window, 'load', init);
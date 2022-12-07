function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.929637, -87.738234);
	var mapOptions = {
		center: myLocation,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
	});

	var contentString = '<h1>Kelvyn Park</h1><p>This is Kelvyn Park, my neighborhood park. This is where I play a lot of soccer with my friends and made a lot of memories with my family.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);
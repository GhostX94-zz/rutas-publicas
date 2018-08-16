/*function initMap(o, d, s) {
    var request = {
        origin: o,
        destination: d,
        travelMode: google.maps.DirectionsTravelMode['DRIVING'],
        unitSystem: google.maps.DirectionsUnitSystem['METRIC'],
        provideRouteAlternatives: false
    };

    map = new google.maps.Map($('#' + s).get(0));
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setMap(map);
            directionsDisplay.setDirections(response);
        } else {
            document.getElementById(s).innerHTML = "<p style='text-align: center;'>Ruta no Encontrada</p>";      //delete content
        }
    });
}*/
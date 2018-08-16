var btnGetGeolocation = document.getElementById('btnGetGeolocation');
var cbxEnableHighAccuracy = document.getElementById('cbxEnableHighAccuracy');
var txtTimeout = document.getElementById('txtTimeout');
var txtMaximumAge = document.getElementById('txtMaximumAge');
var sStatus = document.getElementById('sStatus');
var sLat = document.getElementById('sLat');
var sLon = document.getElementById('sLon');
var sAcc = document.getElementById('sAcc');

function btnGetGeolocation_click(e) {

    btnGetGeolocation.disabled = true;
    sStatus.innerText = 'Obteniendo geolocalización...';

    var positionOptions = {
        enableHighAccuracy: cbxEnableHighAccuracy.checked,
        timeout: parseInt(txtTimeout.value),
        maximumAge: parseInt(txtMaximumAge.value)
    };
    console.log(positionOptions);

    navigator.geolocation.getCurrentPosition(
        geolocation_success, geolocation_error, positionOptions
    );

}

function geolocation_success(position) {

    console.log(position);
    var coords = position.coords;

    sStatus.innerText = 'Datos de geolocalización obtenidos.';
    sLat.innerText = coords.latitude;
    sLon.innerText = coords.longitude;
    sAcc.innerText = coords.accuracy;
    btnGetGeolocation.disabled = false;

}

function geolocation_error(err) {

    console.log(err);

    sStatus.innerText = err.message;
    sLat.innerText = '[Error]';
    sLon.innerText = '[Error]';
    sAcc.innerText = '[Error]';
    btnGetGeolocation.disabled = false;

}

btnGetGeolocation.addEventListener('click', btnGetGeolocation_click);

document.addEventListener('DOMContentLoaded', getLocationAndIP);

function getLocationAndIP() {
    // Get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }

    // Get IP
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip").innerHTML = "Your IP address: " + data.ip;
        })
        .catch(error => console.error('Error fetching IP:', error));
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("location").innerHTML = "Your location: " + latitude + ", " + longitude;
}

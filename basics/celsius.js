function newFunction(tempF) {
    var tempC = ((tempF-32)/9)*5;
    return tempC;
}
var temperature = newFunction(100);
document.getElementById(js).innerHTML = document.write(temperature);
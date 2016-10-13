// tu codigo va aca
function callbackPromedio(a, b, c, callback) {
    var promedio=(a+b+c)/3;
    return callback(promedio);
}

var numero=1;

function segundero() {
    setInterval(function(){
				document.getElementById("titulo").innerHTML = numero++;
 							}, 1000);
}

segundero();

//peticion al servidor

export function ajax(opciones, callback) {

    // crea el objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // establece una función a invocar cuando el atributo readyState cambia
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callback(xhttp.responseText);
        }
    };

    // establece la configuración de la petición (tipo, url y asincronismo)
    xhttp.open(opciones.metodo, opciones.url, true);
   
    for(const key in opciones.cabeceras) {
        xhttp.setRequestHeader(key, opciones.cabeceras[key])
    }
    
    // envía la petición al servidor
    xhttp.send(opciones.body);
}
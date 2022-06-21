import { ajax } from "./ajax.js";
// esta variable se puede utilizar en cualquier parte del archivo
var server = "localhost:8085";
export function obtenerGestores() {
    return new Promise(function (resolve, reject) {
        // const opciones = {
        //   url: `http://${server}/ok`,
        //   metodo: "GET",
        // };
        // ajax(opciones, (data) => {
        //   console.log(data);
        // });
        var opcionesLogin = {
            url: "http://".concat(server, "/login/gestor/"),
            metodo: "POST",
            body: "usuario=gestor1&password=gestor1",
            cabeceras: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };
        // realiza la petición de login del gestor
        ajax(opcionesLogin, function (data) {
            // esta función se ejecuta cuando los datos han sido
            // devueltos por el servicio
            // convirtiendo el string en formato JSON a objeto de JavaScript
            var respuesta = JSON.parse(data);
            // guardamos el token
            var token = respuesta.data.token;
            // realizamos la solicitud para obtener todos los gestores
            var opcionesObtenerGestores = {
                url: "http://localhost:8085/gestores/",
                metodo: "GET",
                cabeceras: {
                    Authorization: "Basic ".concat(token),
                },
            };
            ajax(opcionesObtenerGestores, function (data) {
                // data tiene toda la información de los gestores en formato string
                // console.log(data);
                // convertir a objeto de JavaScript
                var respuesta = JSON.parse(data);
                var gestores = respuesta.data;
                resolve(gestores);
                // mostrarGestores(gestores);
            });
        });
    });
}

// esta variable se puede utilizar en cualquier parte del archivo
const server = "localhost:8085";

function obtenerGestores() {
  return new Promise((resolve, reject) => {

    // const opciones = {
    //   url: `http://${server}/ok`,
    //   metodo: "GET",
    // };

    // ajax(opciones, (data) => {
    //   console.log(data);
    // });

    const opcionesLogin = {
      url: `http://${server}/login/gestor/`,
      metodo: "POST",
      body: "usuario=gestor1&password=gestor1",
      cabeceras: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    // realiza la petición de login del gestor
    ajax(opcionesLogin, (data) => {
      // esta función se ejecuta cuando los datos han sido
      // devueltos por el servicio

      // convirtiendo el string en formato JSON a objeto de JavaScript
      const respuesta = JSON.parse(data);

      // guardamos el token
      const token = respuesta.data.token;

      // realizamos la solicitud para obtener todos los gestores

      const opcionesObtenerGestores = {
        url: "http://localhost:8085/gestores/",
        metodo: "GET",
        cabeceras: {
          Authorization: `Basic ${token}`,
        },
      };

      ajax(opcionesObtenerGestores, (data) => {
        // data tiene toda la información de los gestores en formato string
        // console.log(data);

        // convertir a objeto de JavaScript
        const respuesta = JSON.parse(data);

        const gestores = respuesta.data;
        resolve(gestores);
        // mostrarGestores(gestores);
      });
    });
  });
}

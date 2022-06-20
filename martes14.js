//debo de pasarlo a limpio
/*
Ejercicio 4.1: El resto de funcionalidades anteriores del programa deben abstraerse en funciones.
*/

function generarGestores() {
    
    const gestor1 = {
        id: 1,
        usuario: 'gestor1',
        password: 'gestor1',
        correo: 'gestor1@mail.com'
    };
    
    const gestor2 = {
        id: 2,
        usuario: 'gestor2',
        password: 'gestor2',
        correo: 'gestor2@mail.com'
    };

    const gestores = [gestor1, gestor2, {
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    }];

    return gestores;
}

function generarClientes() {
    const cliente1 = {
        id: 1,
        id_gestor: 1,
        usuario: 'cliente1',
        password: 'cliente1',
        correo: 'cliente1@mail.com',
        saldo: 4300.56
    };
    
    const cliente2 = {
        id: 2,
        id_gestor: 1,
        usuario: 'cliente2',
        password: 'cliente12',
        correo: 'cliente2@mail.com',
        saldo: Math.random() * 1000
    };
    
    const clientes = [cliente1, cliente2];
    clientes.push(
        {
            id: 3,
            id_gestor: 1,
            usuario: 'cliente3',
            password: 'cliente3',
            correo: 'cliente3@mail.com',
            saldo: 1230
        }
    );

    return clientes;
}

function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}

function mostrarGestores(gestores) {
    
    // gestores es un array
    // gestor es un objeto con las propiedades: id, usuario, password, correo
    console.log('--- GESTORES ---');
    for (const gestor of gestores) {
        mostrarGestor(gestor);
    }
}


console.log('--- CLIENTES ---');
for (const cliente of clientes) {
    console.log(`id: ${cliente.id}`);
    console.log(`id_gestor: ${cliente.id_gestor}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
}

console.log(gestores);

const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);
console.log(gestoresJSON.length);

const cliente1JSON = JSON.stringify(cliente1);
console.log(cliente1JSON);

// todos los gestores
// console.log(gestores);

// primer gestor
// console.log(gestores[0]);


// console.log(gestor2);
// console.table(cliente2);




/* 
/***********
 
function obtenerGestores() {
    return new Promise((resolve, reject) => {
       


// console.log(gestor2);
// console.table(cliente2);

Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*///no me vale ese enunciado



// const gestores = generarGestores();
// console.log(gestores);

// const gestoresJSON = JSON.stringify(gestores);
// console.log(gestoresJSON);
// console.log(gestoresJSON.length);

// const clientes = generarClientes();
// const cliente1 = clientes[0];
// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);
   

/*escribe un programa que realice la conversión a JSON del array (y viceversa)
creado en el ejercicio anterior del proyecto*/
//JS a JSON
//convertir arrays en json

// const gestoresJSon = Json.stringify(gestores);
// console.log(gestoresJSon);
// console.log(gestoresJSON.length);

// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);
//////////////////////////////////////////////////////////////////////////
/*
    Realizar una petición a http://localhost:8085/ok y mostrar la respuesta por pantalla
*/


// las propiedades del objeto;las opciones son: url,metodo,body, cabeceras
// const server = 'localhost:8085';



//lo de abajo es lo mismo q esto:
// const server = 'localhost:8085';

// const opciones = {
//     url: `http://${server}/ok`,
//     metodo: 'GET'
// };

// ajax(opciones, (data) => {
//     console.log(data);
// });


// const opcionesLogin = {
//     url: `http://${server}/login/gestor/`,
//     metodo: 'POST',
//     body: 'usuario=gestor1&password=gestor1',
//     cabeceras: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// };

// ajax(opcionesLogin, (data) => {
//     console.log(data);
// })
const server = 'localhost:8085';

const opciones = {
    url:'http://localhost:8085/ok',
    metodo: 'GET'  //método http
};

ajax(opciones, (data) => {
    console.log(data);
})
//-------------------Enviar datos al servidor
const opcionesLogin ={
    url: 'http://localhost:8085/login/gestor/',
    metodo: 'POST',
    body:'usuario=gestor1&password=gestor1',
    cabeceras: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
// realiza la petición de login del gestor
ajax(opcionesLogin, (data) =>{
    // esta función se ejecuta cuando los datos han sido
    // devueltos por el servicio

    // convirtiendo el string en formato JSON a objeto de JavaScript
    const respuesta = JSON.parse(data);
   // guardamos el token
    const token = respuesta.data.token;

   // realizamos la solicitud para obtener todos los gestores

   const opcionesObtenerGestores = {
    url: 'http://localhost:8085/gestores/',
    metodo: 'GET',
    cabeceras: {
         Authorization: `Basic ${token}`
    }
}

ajax(opcionesObtenerGestores, (data) => {

    //data tiene toda la información de los gestores en formato string
    console.log(data);

    // convertir a objeto de JS
    const respuesta = JSON.parse(data);

    // console.log(respuesta);
    const gestores = respuesta.data;
    resolve(gestores);
    // console.log(gestores);
    // mostrarGestores(gestores);

    
});
});

// obtenerGestores(gestores => {
//     mostrarGestores(gestores);
// })

 
    });
}

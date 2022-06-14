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






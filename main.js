


// console.log(gestor2);
// console.table(cliente2);
/* ********************************************************************************* */
/*
Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*///no me vale ese enunciado

function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}
function mostrarGestores(gestores) {

//gestores es un array
//gestor es un objeto con las propiedades: id, usuario, password, email
console.log('GESTORES');
for (const gestor of gestores){
    mostrarGestor(gestor);
}
}
function mostrarCliente(cliente) {
    console.log(`id: ${cliente.id}`);
    console.log(`id_gestor: ${cliente.id_gestor}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
}

function mostrarClientes(clientes) {
    console.log('--- CLIENTES ---');
    for (const cliente of clientes) {
        mostrarCliente(cliente);
    }
}


const gestores = generarGestores();
console.log(gestores);

const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);
console.log(gestoresJSON.length);

const clientes = generarClientes();
const cliente1 = clientes[0];
const cliente1JSON = JSON.stringify(cliente1);
console.log(cliente1JSON);
   

/*escribe un programa que realice la conversión a JSON del array (y viceversa)
creado en el ejercicio anterior del proyecto*/
//JS a JSON
//convertir arrays en json

// const gestoresJSon = Json.stringify(gestores);
// console.log(gestoresJSon);
// console.log(gestoresJSON.length);

// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);





const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@gmail.com'
};
const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@gmail.com'
};

const cliente1 = {
    id: 1,
    id_gestor: 1  ,
    usuario: 'cliente1' ,
    password: 'cliente1',
    correo: 'cliente1@gmail.com',
    saldo: 100.50
}

const cliente2 = {
    id: 2,
    id_gestor: 1 ,
    usuario: 'cliente2',
    password: 'cliente2',
    correo: 'cliente2@gmail.com',
    saldo: 100.50
}

// const mensaje1 = { //id de gestores
//     id: 1,
//     id_origen: ,
//     id_destino: ,
//     texto: char(140),
//     fecha: datetime
// }
console.log(gestor2);
console.table(cliente2);
/* ********************************************************************************* */
/*
Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*/

const gestores = [gestor1, gestor2];
const clientes = [cliente1, cliente2];
//gestores es un array
//gestor es un objeto con las propiedades: id, usuario, password, email
console.log('GESTORES');
for (const gestor of gestores){
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}
console.log('CLIENTES');
for (const cliente of clientes){
    console.log(`id: ${cliente.id}`);
    console.log(`id_gestor: ${cliente.id_gestor}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
}

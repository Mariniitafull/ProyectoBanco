function mostrarGestor(gestor) {
    console.log("id: ".concat(gestor.id));
    console.log("usuario: ".concat(gestor.usuario));
    console.log("password: ".concat(gestor.password));
    console.log("correo: ".concat(gestor.correo));
    console.log('-----');
}
export function mostrarGestores(gestores) {
    //gestores es un array
    //gestor es un objeto con las propiedades: id, usuario, password, email
    console.log('GESTORES');
    for (var _i = 0, gestores_1 = gestores; _i < gestores_1.length; _i++) {
        var gestor = gestores_1[_i];
        mostrarGestor(gestor);
    }
}
function mostrarCliente(cliente) {
    console.log("id: ".concat(cliente.id));
    console.log("id_gestor: ".concat(cliente.id_gestor));
    console.log("usuario: ".concat(cliente.usuario));
    console.log("password: ".concat(cliente.password));
    console.log("correo: ".concat(cliente.correo));
    console.log("saldo: ".concat(cliente.saldo));
    console.log('-----');
}
function mostrarClientes(clientes) {
    console.log('--- CLIENTES ---');
    for (var _i = 0, clientes_1 = clientes; _i < clientes_1.length; _i++) {
        var cliente = clientes_1[_i];
        mostrarCliente(cliente);
    }
}

function generarGestores() {
    var gestor1 = {
        id: 1,
        usuario: 'gestor1',
        password: 'gestor1',
        correo: 'gestor1@gmail.com'
    };
    var gestor2 = {
        id: 2,
        usuario: 'gestor2',
        password: 'gestor2',
        correo: 'gestor2@gmail.com'
    };
    var gestores = [gestor1, gestor2]; //para añadir un gestor mas habria que poner
    gestores.push({
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    });
    return gestores;
}
function generarClientes() {
    var cliente1 = {
        id: 1,
        id_gestor: 1,
        usuario: 'cliente1',
        password: 'cliente1',
        correo: 'cliente1@gmail.com',
        saldo: 100.50
    };
    var cliente2 = {
        id: 2,
        id_gestor: 1,
        usuario: 'cliente2',
        password: 'cliente2',
        correo: 'cliente2@gmail.com',
        saldo: 100.50
    };
    var clientes = [cliente1, cliente2];
    clientes.push({
        id: 3,
        id_gestor: 1,
        usuario: 'cliente3',
        password: 'cliente3',
        correo: 'cliente3@mail.com',
        saldo: 1230
    });
    return clientes;
}

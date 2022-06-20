
async function main() {

    const gestores = await obtenerGestores();
    mostrarGestores(gestores);
}

main();
// //funcion autoejecutable
// (async () => {
//     const gestores = await obtenerGestores();
//     mostrarGestores(gestores);
// })();

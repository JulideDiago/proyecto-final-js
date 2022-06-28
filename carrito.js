// Obtenemos los elementos de html.
let inputProducto = document.getElementById("inputProducto");
const inputCantidad = document.getElementById("inputCantidad");
const contenedor = document.querySelector("#contenedor");
const btnAgregar = document.querySelector("#btnAgregar");

//Creamos el html con las cosas que nos envian por parametro.
function agregarProducto(producto, cantidad){
    let html;
    // `Hola, esto es un string` --> `Hola ${producto} es un string`
    // "Hola, esto es un string" --> "hola" + producto + "esto es un string"
    // 'Hola, esto es un string'

    html =  "El producto es " + producto + " seleccionaste " + cantidad + " unidades";


    contenedor.innerHTML += html;
}

//Funcion que envia a agregarProducto su valor.
function submit(){
    agregarProducto(inputProducto.value, inputCantidad.value);
}

// Accion de click.
btnAgregar.addEventListener("click", () => {
    submit()
})
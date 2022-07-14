// Obtenemos los elementos de html.
let inputProducto = document.getElementById("inputProducto");
const contenedor = document.querySelector("#contenedor");
const contenedorProductos = document.getElementById("contenedorProductos");
let divCarrito = document.getElementById("carrito");
let carritoProductosAgregados = [];

//funcion constructora
function Producto(precio, cantidad) {
    this.precio = precio
    this.cantidad = cantidad
}

//Creamos el html con las cosas que nos envian por parametro.
function agregarProducto(producto, cantidad){
    let html;
    // `Hola, esto es un string` --> `Hola ${producto} es un string`
    // "Hola, esto es un string" --> "hola" + producto + "esto es un string"
    // 'Hola, esto es un string'

    html =  "<li>El producto es <b>" + producto.nombreProducto + "</b> seleccionaste " + cantidad + " unidades. El precio subtotal es de $" + cantidad*producto.precio  + " <a class='btn btn-danger btn-sm' id='botonEliminar'><i class='bi bi-trash-fill'></i></a> </li>";

    contenedor.innerHTML += html;

    let productoAAgregar = new Producto(producto.precio, cantidad);
    carritoProductosAgregados.push(productoAAgregar)
    mostrarTotal(carritoProductosAgregados)
}

function mostrarTotal(carritoFinal){
    let total = 0;
    carritoFinal.forEach(producto => {
        total = total + producto.precio * producto.cantidad
    });

    divCarrito.innerHTML = `<b>El total del carrito es de $${total} </b>`
}

function agregarAlCarrito(id) {
    let productoAgregar = stock.find(element => element.id == id);

    let selectCantidad = document.getElementById(`selectCantidad${id}`);

    agregarProducto(productoAgregar, selectCantidad.options[selectCantidad.selectedIndex].text)
}

function mostrarProductos(listaDeProductos){

    listaDeProductos.forEach(element => {
        let html = `
        <div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" id="inputProducto">${element.nombreProducto}</h5>
            <p class="card-text">${element.descripcion}</p>
            <p class="card-text">${element.presentación} </p>
            <p class="card-text">$${element.precio}</p>
                <label for="unidades" class="form-label">Unidades que queres llevar</label>
                <select class="form-select" aria-label="select unidades" id="selectCantidad${element.id}">
                <option selected>1</option>
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">100</option>
            </select>
            <br>
            <a class="btn btn-primary" id="btnAgregar${element.id}">Agregar</a>  
            <br>
            </div>
        </div>`;

        contenedorProductos.innerHTML+=html;
    });

    listaDeProductos.forEach((producto) => {
        let btnAgregarId = document.getElementById(`btnAgregar${producto.id}`);
        btnAgregarId.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            Toastify({
                text: "Agregaste " + producto.nombreProducto + " al carrito. Que lo disfrutes!",
                duration: 3000,
                destination: "/#carrito"
              }).showToast();
        });
    });
}

mostrarProductos(stock)
mostrarTotal(carritoProductosAgregados)
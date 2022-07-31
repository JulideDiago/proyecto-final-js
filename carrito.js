
// Obtenemos los elementos de html.
const inputProducto = document.getElementById("inputProducto");
const contenedor = document.querySelector("#contenedor");
const contenedorProductos = document.getElementById("contenedorProductos");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
let carritoProductosAgregados = [];
let stock = [];

importarStock();

function importarStock() {
    const url = 'stock.json';
    const peticion = fetch('stock.json');

    peticion.then(resp => {
        return resp.json();
    }).then(data => {
        mostrarProductos(data);
        stock = data;
    })
        .catch(console.warn);
}

//funcion constructora
function Producto(producto, cantidad) {
    this.id = producto.id
    this.nombre = producto.nombreProducto
    this.precio = producto.precio
    this.cantidad = cantidad
}

function agregarProducto(producto, cantidad){
    let productoAAgregar = new Producto(producto, cantidad);
    
    carritoProductosAgregados.push(productoAAgregar);
    actualizarCarrito();
    mostrarCarrito(productoAAgregar);    
}

function mostrarCarrito(productoAAgregar) {
    let html;
    html = `<li>El producto es <b> ${productoAAgregar.nombre}</b> <p id="cantidad${productoAAgregar.id}"> seleccionaste ${productoAAgregar.cantidad} unidades.</p> El precio de cada unidad es: $ ${productoAAgregar.precio} <a class='btn btn-danger btn-sm' id='botonEliminar${productoAAgregar.id}'><i class='bi bi-trash-fill'></i></a> </li>`;

    contenedor.innerHTML += html;

    carritoProductosAgregados.forEach((producto) => {
        let btnEliminar= document.getElementById(`botonEliminar${producto.id}`);

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(btnEliminar, producto);
        });
    });
}

function eliminarProducto(btnEliminar, productoAAgregar) {
    if(productoAAgregar.cantidad == 1){
        btnEliminar.parentElement.remove()
        carritoProductosAgregados = carritoProductosAgregados.filter(item => item.id !== productoAAgregar.id)
        actualizarCarrito()
    } else {
        productoAAgregar.cantidad = productoAAgregar.cantidad - 1
        document.getElementById(`cantidad${productoAAgregar.id}`).innerHTML = `<p id="cantidad${productoAAgregar.id}">seleccionaste ${productoAAgregar.cantidad} unidades</p>`
        actualizarCarrito()
    }
}

function agregarAlCarrito(id) {
    let productoAgregar = stock.find(element => element.id == id);

    let selectCantidad = document.getElementById(`selectCantidad${id}`);

    agregarProducto(productoAgregar, selectCantidad.options[selectCantidad.selectedIndex].text)
}

function mostrarProductos(listaDeProductos){

    listaDeProductos.forEach(element => {
        let html = `
            <div class="card h-90" style="width: 18rem; margin:10px">
                <img src="${element.imagen}" class="card-img-top" alt="..." height="220px">
                <div class="card-body">
                <h5 class="card-title" id="inputProducto">${element.nombreProducto}</h5>
                <p class="card-text" id="descripcion">${element.descripcion}</p>
                <p class="card-text" id="presentacion">${element.presentación} </p>
                <p class="card-text" id="precio">$${element.precio}</p>
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
                text: "Agregaste " + producto.nombreProducto + " al carrito",
                duration: 3000,
                destination: "/#carrito"
              }).showToast();
        });
    });
}

function actualizarCarrito(){
    precioTotal.innerText = carritoProductosAgregados.reduce((acumulador, elemento)=> acumulador + (elemento.precio * elemento.cantidad), 0);
 }
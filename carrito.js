// Obtenemos los elementos de html.
let inputProducto = document.getElementById("inputProducto");
const selectCantidad = document.getElementById("selectCantidad");
const contenedor = document.querySelector("#contenedor");
const contenedorProductos = document.getElementById("contenedorProductos");

function agregarAlCarrito(id) {
    console.log("Agregando")
    let productoAgregar = stock.find(element => element.id == id);
    console.log(productoAgregar);
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
                <select class="form-select" aria-label="select unidades" id="selectCantidad">
                <option selected>x1</option>
                <option value="1">Pack de 10</option>
                <option value="2">Pack de 25</option>
                <option value="3">Pack de 100</option>
            </select>
            <br>
            <a class="btn btn-primary" id="btnAgregar${element.id}">Agregar</a>  
            <br>
            </div>
        </div>`;

        contenedorProductos.innerHTML+=html;
    
        let btnAgregarId = document.getElementById(`btnAgregar${element.id}`);
        btnAgregarId.addEventListener("click", () => {
            agregarAlCarrito(element.id)
        }) 
    });
}




mostrarProductos(stock)

//Creamos el html con las cosas que nos envian por parametro.
function agregarProducto(producto, cantidad){
    let html;
    // `Hola, esto es un string` --> `Hola ${producto} es un string`
    // "Hola, esto es un string" --> "hola" + producto + "esto es un string"
    // 'Hola, esto es un string'

    html =  "<li>El producto es " + producto + " seleccionaste " + cantidad + " unidades</li>";


    contenedor.innerHTML += html;
}


// Accion de click.inputProducto.value
// btnAgregar.addEventListener("click", () => {
   
//     agregarProducto(inputProducto.textContent, selectCantidad.options[selectCantidad.selectedIndex].text);
// })



//simulador turnos consultorio de nutricion 
//funcion Declaracion
function ingresarNombre () {
    //ejecución funcion
    let nombre = prompt ("Ingrese el nombre del paciente");
    while (nombre === "") {
        nombre = prompt("No se admite el campo vacío. Por favor ingresa el nombre del paciente");
    }
    return nombre;
}
function ingresarMail () {
    let mail = prompt ("Por favor dejanos tu mail de contacto");
    while (mail === "") {
        mail = prompt("No se admite el campo vacío. Por favor ingresa tu mail");
    }
    return mail;
}

//funcion constructora
function Paciente(nombre, mail) {
    this.nombre = nombre
    this.mail = mail
}

let nombrePaciente = ingresarNombre ();
let mailPaciente = ingresarMail ();

let paciente = new Paciente(nombrePaciente, mailPaciente);
console.log(paciente);

const nutricionistas = [{ id:"1", nutri:"Romina", precio: "5000." },
                        { id:"2", nutri:"Agustina", precio: "4500." },
                        { id:"2", nutri:"Sofia", precio: "5500." },
                        { id:"3", nutri:"Julieta", precio: "6000."},
                       ];



const precioactualizado = nutricionistas.map((nutricionista) => {
    return {
        /*id: nutricionista.id,
        nutri: nutricionista.nutri, */
        precio: nutricionista.precio*1.5,
    }
 }
)
console.log(precioactualizado);

let nutris;
do {
    nutris = prompt ("Escribí el nombre de la Nutri con la que querés atenderte  \n Romina \n Agustina \n Sofia \n Julieta ");
} while(nutris != "Romina" && nutris != "Agustina" && nutris != "Sofia" && nutris != "Julieta");
switch (nutris) { 
    case "Romina":
        alert (paciente.nombre +" el precio de la consulta con " + nutricionistas[0].nutri + " es de $" + nutricionistas[0].precio + " A la brevedad te llegará un mail para coordinar la consulta con ella. Tené en cuenta que en el mes de agosto la consulta aumentará a $" + precioactualizado[0].precio + " Muchas gracias por contactarnos!")
        break;
    case "Agustina":
        alert (paciente.nombre + "  el precio de la consulta con "+ nutricionistas[1].nutri + " es de $ " + nutricionistas[1].precio + " A la brevedad te llegará un mail para coordinar la consulta con ella. Tené en cuenta que en el mes de agosto la consulta aumentará a $" + precioactualizado[1].precio + " Muchas gracias por contactarnos!") 
        break;
    case "Sofia":
        alert (paciente.nombre + "  el precio de la consulta con " + nutricionistas[2].nutri + " es de $ " + nutricionistas[2].precio + " A la brevedad te llegará un mail para coordinar la consulta con ella. Tené en cuenta que en el mes de agosto la consulta aumentará a $" + precioactualizado[2].precio + " Muchas gracias por contactarnos!") 
        break;
    case "Julieta": 
        alert (paciente.nombre + "  el precio de la consulta con "+ nutricionistas[3].nutri +" es de $ " + nutricionistas[3].precio +" A la brevedad te llegará un mail para coordinar la consulta con ella. Tené en cuenta que en el mes de agosto la consulta aumentará a $" + precioactualizado[3].precio + " Muchas gracias por contactarnos!") 
        break;
}

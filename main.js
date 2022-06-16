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
let nutris;
do {
    nutris = prompt ("Escribí el nombre de la Nutri con la que querés atenderte  \n Romina \n Agustina \n Sofia \n Julieta ");
} while(nutris != "Romina" && nutris != "Agustina" && nutris != "Sofia" && nutris != "Julieta");
switch (nutris) { 
    case "Romina":
        alert (paciente.nombre + "  el precio de la consulta con Romina es de $5000. A la brevedad te llegará un mail para coordinar la consulta con ella. Muchas gracias por visitarnos!") 
        break;
    case "Agustina":
        alert (paciente.nombre + "  el precio de la consulta con Agustina es de $4500. A la brevedad te llegará un mail para coordinar la consulta con ella. Muchas gracias por visitarnos!") 
        break;
    case "Sofia":
        alert (paciente.nombre + "  el precio de la consulta con Sofia es de $4000. A la brevedad te llegará un mail para coordinar la consulta con ella. Muchas gracias por visitarnos!") 
        break;
    case "Julieta": 
        alert (paciente.nombre + "  el precio de la consulta con Julieta es de $6000. A la brevedad te llegará un mail para coordinar la consulta con ella. Muchas gracias por visitarnos!") 
        break;
}

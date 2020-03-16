document.addEventListener("DOMContentLoaded", e => {
    document.querySelector("#frmAlumnos").addEventListener("submit", event => {
        guardarRegistro();
    });
    document.querySelector("#btnnuevo").addEventListener("click", event => {
        limpiar();
    });
    document.querySelector("#btnbuscar").addEventListener("click", event => {
        buscar();
    });
});

/*document.addEventListener("DOMContentLoaded",function(e){
    alert("CALLBACK LISTO");
});*/

function limpiar() {
    document.querySelector("#txtcodigo").value = "";
    document.querySelector("#txtnombre").value = "";
    document.querySelector("#txtapellido").value = "";
    document.querySelector("#txtfecha").value = "";
    document.querySelector("#txttel").value = "";
    document.querySelector("#txtdireccion").value = "";
}

function guardarRegistro(e) {
    event.preventDefault();

    let codigo = document.querySelector("#txtcodigo").value,
        nombre = document.querySelector("#txtnombre").value,
        apellido = document.querySelector("#txtapellido").value,
        fecha = document.querySelector("#txtfecha").value,
        telefono = document.querySelector("#txttel").value,
        direccion = document.querySelector("#txtdireccion").value;

    console.log(nombre, apellido, fecha, telefono, direccion);

    if ('localStorage' in window) {
        window.localStorage.setItem("codigo" + codigo, codigo);
        window.localStorage.setItem("nombre" + codigo, nombre);
        window.localStorage.setItem("apellido" + codigo, apellido);
        window.localStorage.setItem("fecha" + codigo, fecha);
        window.localStorage.setItem("direccion" + codigo, direccion);
        window.localStorage.setItem("telefono" + codigo, telefono);
    } else {
        alert("Por favor ACTUALIZATE!!!.");
    }
}

function buscar() {

    let codigo = document.querySelector("#txtcodigo").value;
    document.querySelector("#txtnombre").value = window.localStorage.getItem("nombre" + codigo);
    document.querySelector("#txtapellido").value = window.localStorage.getItem("apellido" + codigo);

    let fecha = window.localStorage.getItem("fecha" + codigo);
    console.log(fecha);

    document.querySelector("#txtfecha").value = fecha;
    document.querySelector("#txttel").value = window.localStorage.getItem("telefono" + codigo);
    document.querySelector("#txtdireccion").value = window.localStorage.getItem("direccion" + codigo);

}
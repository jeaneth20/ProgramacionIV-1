var $ = el => document.querySelector(el),
    frmAlumnos = $("#frmDocentes");
frmAlumnos.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();

    let docentes = {
        accion: 'nuevo',
        codigo: $("#txtCodigoDocentes").value,
        nombre: $("#txtNombreDocentes").value,
        direccion: $("#txtDireccionDocentes").value,
        telefono: $("#txtTelefonoDocentes").value

    }

    fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then(resp => resp.json()).then(resp => {

        //console.log(resp)
        $("#respuestaDocente").innerHTML = `
        <div class="alert alert-success" role="alert">
        ${resp.msg}
        </div>
        `;
    });
});
export function modulo(){
    var $ = el => document.querySelector(el),
        frmDocentes = $("#frmDocentes");
    frmDocentes.addEventListener("submit", e => {
        e.preventDefault();
        e.stopPropagation();

        let docentes = {
            accion: frmDocentes.dataset.accion,
            id_docente: frmDocentes.dataset.id_docente,
            codigo: $("#txtCodigoDocentes").value,
            nombre: $("#txtNombreDocentes").value,
            direccion: $("#txtDireccionDocentes").value,
            dui: $("#txtDuiDocentes").value,
            telefono: $("#txtTelefonoDocentes").value
        }

        //console.log(docentes);

        fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then(resp => resp.json()).then(resp => {

            //console.log(resp)
            $("#respuestaDocente").innerHTML = `
            <div class="alert alert-success" role="alert">
            ${resp.msg}
            </div>
            `;
        });
    });
    frmDocentes.addEventListener("reset", e => {
        $("#frmDocentes").dataset.accion = 'nuevo';
        $("#frmDocentes").dataset.id_docente = '';
    });
}
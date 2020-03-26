export function modulo() {
    var $ = el => document.querySelector(el),
        frmBuscarDocentes = $("#txtBuscarDocente");
    frmBuscarDocentes.addEventListener('keyup', e => {
        traerDatos(frmBuscarDocentes.value);
    });
    let modificarDocente = (docente) => {
        $("#frmDocentes").dataset.accion = 'modificar';
        $("#frmDocentes").dataset.id_docente = docente.id_docente;
        $("#txtCodigoDocentes").value = docente.codigo;
        $("#txtNombreDocentes").value = docente.nombre;
        $("#txtDireccionDocentes").value = docente.direccion;
        $("#txtDuiDocentes").value = docente.dui;
        $("#txtTelefonoDocentes").value = docente.telefono;
    };
    let eliminarDocente = (id_docente) => {

        let dialog = document.getElementById("dialogDocentes");
        dialog.close();
        dialog.showModal();

        document.getElementById("btnCancelarDocentes").addEventListener('click', event => {
            dialog.close();
        });

        document.getElementById("btnConfirmarDocentes").addEventListener('click', event => {
            fetch(`private/modulos/docentes/procesos.php?proceso=eliminarDocente&docente=${id_docente}`).then(resp => resp.json()).then(resp => {
                traerDatos('');
            });
            dialog.close();
        })
        
    };
    let traerDatos = (valor) => {
    
        fetch(`private/modulos/docentes/procesos.php?proceso=buscarDocente&docente=${valor}`).then(resp => resp.json()).then(resp => {
            //console.log(resp);
            let filas = '';
            resp.forEach(docentes => {
                filas += `
                    <tr data-id_docente='${docentes.id_docente}' data-docente='${JSON.stringify(docentes)}'>
                        <td>${docentes.codigo}</td>
                        <td>${docentes.nombre}</td>
                        <td>${docentes.direccion}</td>
                        <td>${docentes.dui}</td>
                        <td>${docentes.telefono}</td>
                        <td>
                            <input type="button" class="btn btn-outline-danger text-white" value="del">
                        </td>
                    </tr>
                `;
            });
            $("#tbl-buscar-docentes> tbody").innerHTML = filas;
            $("#tbl-buscar-docentes > tbody").addEventListener("click", e => {
                if (e.srcElement.parentNode.dataset.docente == null) {
                    eliminarDocente(e.srcElement.parentNode.parentNode.dataset.id_docente);
                } else {
                    modificarDocente(JSON.parse(e.srcElement.parentNode.dataset.docente));
                }
            });
        });
    };
    traerDatos('');
}
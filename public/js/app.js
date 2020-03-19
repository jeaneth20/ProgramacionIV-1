var $ = el =>document.querySelector(el);
document.addEventListener("DOMContentLoaded", event=>{
    let mostrarVista = document.getElementsByName('navOption'); /* RECOGE LOS ELEMENTOS EN UN ARRAY */

    //console.log(mostrarVista);
    let modulo;
    mostrarVista.forEach(element => {   /*RECORRE LOS NAV PARA IDENTIFICAR EL EVENTO CLICK Y OBTENER EL MODULO */
        element.addEventListener('click', e=>{
            e.stopPropagation();
            modulo = e.toElement.dataset.modulo;
            apuntarPeticion(modulo);
        });
    });
});

function apuntarPeticion(modulo) {
    console.log(modulo);
    let peticion;
    switch (modulo) {
        case 'alumnos':
            peticion = 'public/vistas/alumnos/alumnos.html';
            break;
        case 'docentes':
            peticion = 'public/vistas/docentes/docentes.html';
            break;
        default:
            alert('MODULO VACIO');
            break;
    }
    fetch(peticion).then(resp => resp.text()).then(resp => {
        $(`#vistas-${modulo}`).innerHTML = resp;
        let btnCerrar = $(".close");
        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });
        let cuerpo = $("body"), script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
    });
}

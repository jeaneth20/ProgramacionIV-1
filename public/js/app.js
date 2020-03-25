
/*document.addEventListener("DOMContentLoaded", event=>{
    //let mostrarVista = document.getElementsByName('navOption');  RECOGE LOS ELEMENTOS EN UN ARRAY 

    //console.log(mostrarVista);
    let modulo;
    mostrarVista.forEach(element => {   /*RECORRE LOS NAV PARA IDENTIFICAR EL EVENTO CLICK Y OBTENER EL MODULO
        element.addEventListener('click', e=>{
            e.stopPropagation();
            modulo = e.toElement.dataset.modulo;
            apuntarPeticion(modulo);
        });
    });
});*/

function init(){
    var $ = el => {
        return el.match(/^#/)? document.querySelector(el): document.querySelectorAll(el);
    }
    let mostrarVista = $("[class*='mostrar']");
    console.log(mostrarVista);

    mostrarVista.forEach(element => {
        element.addEventListener('click', e=>{
            e.stopPropagation();

            let modulo= e.srcElement.dataset.modulo;
            let form= e.srcElement.dataset.form;

            fetch(`public/vistas/${modulo}/${form}.html`).then(resp=>resp.text()).then(resp=>{
                $(`#vista-${form}`).innerHTML=resp;

                let btnCerrar =$(`#btn-close-${form}`);
                btnCerrar.addEventListener('click', event=>{
                    $(`#vista-${form}`).innerHTML="";
                });
                import (`../vistas/${modulo}/${form}.js`).then(module=>{
                    module.modulo();
                });
                init();
            });
        });
    });
}
init();

/*function apuntarPeticion(modulo) {
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
}*/

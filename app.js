document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("submit", event => {
        event.preventDefault();
        let $resp = document.querySelector("#lblsaludo"),
            nombre = document.querySelector("#txtnombre").value;
        $resp.innerHTML = 'Iniciando Peticion al Server...';


        fetch(`saludo.php?nombre=${nombre}`).then(
            resp => resp.text()).then(resp => {

            $resp.innerHTML = resp;

        })


    });
});
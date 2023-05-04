var buttonSearch  = document.querySelector("#search-patient");

buttonSearch .addEventListener("click", () => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://my-json-server.typicode.com/matheusfernandes-git/fakeapi-testes/pacientes");

    xhr.addEventListener("load", function() {
        var errorAjax = document.querySelector("#error-ajax");

        if (xhr.status == 200) {
            errorAjax.classList.add('hideName');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(pacient) {
                addPatientTable(pacient);
            });
        } else {
            errorAjax.classList.remove('hideName');
        }
    });

    xhr.send();
});

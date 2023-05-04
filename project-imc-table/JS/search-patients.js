var buttonSearch = document.querySelector("#search-patient");

buttonSearch.addEventListener("click", () => {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        var errorAjax = document.querySelector('#error-ajax');

        if(xhr.status == 200){
            errorAjax.classList.add('hideName');
            var resp = xhr.responseText;
            var patients = JSON.parse(resp);
    
            patients.forEach((patient) => {
                console.log(patient)
                addPatientTable(patient);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);

            errorAjax.classList.remove('hideName');
        }
        
    });
    
    xhr.send();''

});
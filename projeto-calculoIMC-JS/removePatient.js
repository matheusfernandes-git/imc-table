var button = document.querySelector('#remove-patient');
var pacientes = document.querySelectorAll(".paciente");
var novoPaciente = document.querySelector(".new-paciente");

    button.addEventListener("click", function() {
         pacientes.removeChild(novoPaciente);
});
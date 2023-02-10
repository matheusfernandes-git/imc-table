const patients = document.querySelectorAll(".paciente");

for (var i = 0; i < patients.length; i++) {

    const patient = patients[i];

    const tdPeso = patient.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    const tdAltura = patient.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    const tdImc = patient.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        patient.classList.add("invalid-patient");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        patient.classList.add("invalid-patient");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculateIMC(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculateIMC(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
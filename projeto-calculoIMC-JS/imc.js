const patients = document.querySelectorAll(".paciente");

for (var i = 0; i < patients.length; i++) {

    const patient = patients[i];

    const tdPeso = patient.querySelector(".info-peso");
    var weight = tdPeso.textContent;

    const tdAltura = patient.querySelector(".info-altura");
    var height = tdAltura.textContent;

    const tdImc = patient.querySelector(".info-imc");

    var weightIsValid = validatingWeight(weight);
    var heightIsValid = validatingHeight(height);
    
    if(!weightIsValid){
        console.log("Peso inválido!");
        weightIsValid = false;
        tdImc.textContent = "Peso inválido";
        patient.classList.add("invalid-patient");
    }

    else if (!heightIsValid) {
        console.log("Altura inválida!");
        heightIsValid = false;
        tdImc.textContent = "Altura inválida";
        patient.classList.add("invalid-patient");
    }

     else if (weightIsValid && heightIsValid) {
        var imc = calculateIMC(weight,height);
        tdImc.textContent = imc;
    }
}

function calculateIMC(weight, height){
    var imc = 0;

    imc = weight / (height * height);
    return imc.toFixed(2);
}

function validatingWeight(weight){
    if(weight > 0 && weight < 1000){
        return true;
    }else{
        return false;
    }
}

function validatingHeight(height){
    if(height > 0 && height < 3.00){
        return true;
    }else{
        return false;
    }
}
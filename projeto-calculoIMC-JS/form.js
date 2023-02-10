var addPatient = document.querySelector('#adicionar-paciente');

addPatient.addEventListener('click', (event) =>{
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');

    var pacient = getPacientFromForm(form);

    const patienteTr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const weightTd = document.createElement('td');
    const heightTd = document.createElement('td');
    const fatTd = document.createElement('td');
    const imcTd = document.createElement('td');

    nameTd.textContent = pacient; 
    weightTd.textContent = pacient; 
    heightTd.textContent = pacient;
    fatTd.textContent = pacient;
    imcTd.textContent = calculateIMC(peso, altura);

    patienteTr.appendChild(nameTd);
    patienteTr.appendChild(weightTd);
    patienteTr.appendChild(heightTd);
    patienteTr.appendChild(fatTd);
    patienteTr.appendChild(imcTd);

    const patienteTable = document.querySelector('#tabela-pacientes');

    patienteTable.appendChild(patienteTr);

})

function getPacientFromForm(form){

    var pacient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculateIMC(form.peso.value, form.altura.value)
    } 

    return pacient;

}
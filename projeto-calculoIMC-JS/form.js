const addPatient = document.querySelector('#add-patient');

addPatient.addEventListener('click', (event) =>{
    event.preventDefault();

    const form = document.querySelector('#form-add');
    var patient = getPatientFromForm(form);

    const patientTable = document.querySelector('#patient-table');

    patientTable.appendChild(createTr(patient));
    form.reset();

})

function getPatientFromForm(form){

    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculateIMC(form.peso.value, form.altura.value)
    } 

    return patient;

}

function createTr(patient){
    var patientTr = document.createElement('tr');
    patientTr.classList.add('paciente');

    //Adiciona os dados do TD dentro da TR.
    patientTr.appendChild(createTd(patient.name, 'info-name'));
    patientTr.appendChild(createTd(patient.weight, 'info-peso'));
    patientTr.appendChild(createTd(patient.height, 'info-altura'));
    patientTr.appendChild(createTd(patient.fat, 'info-gordura'));
    patientTr.appendChild(createTd(patient.imc, 'info-imc'));

    return patientTr;
    
}

function createTd(data, classe){
    const td = document.createElement('td');
    td.textContent = data;
    td.classList.add(classe);

    return td;
}

function validatingPatient(patient){
    if(){
        return true;
    }
}
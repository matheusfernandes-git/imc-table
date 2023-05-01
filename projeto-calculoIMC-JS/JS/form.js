const addPatient = document.querySelector('#add-patient');

addPatient.addEventListener('click', (event) =>{
    event.preventDefault();
    
    const form = document.querySelector('#form-add');
    var patient = getPatientFromForm(form);
    
    //Verifica os erros
    
    var errors = validatingPatient(patient);
    console.log(errors)
    if(errors.length > 0){
        displayMsgError(errors);
        return;          
    }

    addPatientTable(patient);

    form.reset();

    var msgError = document.querySelector('#msg-errors');
    msgError.innerHTML = '';
    
});


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

function addPatientTable(patient) {
    var pacienteTr = createTr(patient);
    var tabela = document.querySelector("#patient-table");
    tabela.appendChild(pacienteTr);
}

function validatingPatient(patient){
    
    var errors = [];

    if(patient.name === ''){
        errors.push('Insira um nome!');
    }
    
    if(!validatingWeight(patient.weight)){
        errors.push('Peso é inválido!');  
    }
    
    if(!validatingHeight(patient.height)){
        errors.push('Altura é inválida!'); 
    }

    if(patient.fat === '' ){
        errors.push('Insira uma % de gordura!');
    }

    return errors;
    
}

function displayMsgError(erros){

    var errorsUl = document.querySelector("#msg-errors");
    errorsUl.innerHTML = '';

    erros.forEach((erro) => {
    var errorsLi = document.createElement("li");
    errorsLi.textContent = erro;
    errorsUl.appendChild(errorsLi);
})}
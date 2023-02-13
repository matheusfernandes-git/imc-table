var inputFilter = document.querySelector('#filter-table');

inputFilter.addEventListener('input', () =>{
   inputFilter.value;
   var patients = document.querySelectorAll('.paciente');

    if(inputFilter.value.length > 0){
        for(var i = 0; i < patients.length; i++){
           var patient = patients[i];
           var tdName = patient.querySelector('.info-nome');
           var name = tdName.textContent;
           var expression = new RegExp(inputFilter.value, 'i');
           
           if(!expression.test(name)){
                patient.classList.add('hideName');
           }else{
                patient.classList.remove('hideName');
           }

        }  
    }else{
        for(var i = 0; i < patients.length; i++){
            var patient = patients[i];
            patient.classList.remove('hideName');
        }
    }

});

var searchButton = document.querySelector('#search-patient');

searchButton.addEventListener('click', () =>{
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json');

    xhr.addEventListener('load', () =>{
        console.log(xhr.responseText);
    });

    xhr.send(); 
})
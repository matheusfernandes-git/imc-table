var table = document.querySelector("#patient-table");
var button = document.querySelector('#remove-patients');

button.addEventListener('click', () => {
    table.lastElementChild.classList.add("fadeOut");
    setTimeout(function () {
        table.lastElementChild.remove();
    }, 500);

})



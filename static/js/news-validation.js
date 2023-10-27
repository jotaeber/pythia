
const form = document.getElementById('formRegister');
const formControls = document.getElementsByClassName('form-control');
const selectCountry = document.getElementsByName('country');
const inputs = document.getElementsByTagName('input');
const select2 = document.querySelector('[name="country"]');
const labels = document.querySelectorAll('.form-control label');

//Creacion de nodos
const formRegister = document.querySelector('#formRegister');
const p = document.createElement('p');
// const b = document.createElement('b');
// b.textContent='No te olvides de completar el formulario';
// p.appendChild(b);
console.log(p);
p.innerHTML = '<b>No te olvides de completar el formulario</b>';

formRegister.appendChild(p);

const validationForm = (event) => {
    // alert('Estoy validando el formulario');
    event.preventDefault();
    
    const firtsname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');

    let validation = true;
    
    if(firtsname.value === ''){
        firtsname.classList.add('error');
        const divError = document.querySelector('#error-firstname');
        divError.textContent='Debes completar el campo nombre';
        validation = false;
    }
    if(lastname.value === ''){
        lastname.classList.add('error');
        const divError = document.querySelector('#error-lastname');
        divError.textContent='Debes completar el campo apellido';
        validation= false;
    }

    if(validation){
        formRegister.submit();
    }
}

formRegister.addEventListener('submit',validationForm);

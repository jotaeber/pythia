
// Nodos
const formNewsletter = document.querySelector('#form-newsletter');
const p = document.createElement('p');

const validationForm = (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const age = document.querySelector('#edad');

    let validation = true;
    
    if(name.value === ''){
        // name.classList.add('error');
        const divError = document.querySelector('#error-nombre');
        divError.textContent='Falta agregar nombre y apellido...';
        validation = false;
    }
    if(email.value === ''){
        // email.classList.add('error');
        const divError = document.querySelector('#error-email');
        divError.textContent='Falta agregar email...';
        validation = false;
    }
    if(age.value === 0){
        // age.classList.add('error');
        const divError = document.querySelector('#error-edad');
        divError.textContent='Falta agregar edad...';
        validation = false;
    }
   
    
    if(validation){
        formNewsletter.submit();
    }
}

formNewsletter.addEventListener('submit',validationForm);

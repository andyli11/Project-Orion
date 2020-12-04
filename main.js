const myForm = document.querySelector('#my-form');
const firstNameInput = document.querySelector('#fname');
const lastNameInput = document.querySelector('#lname');
const emailInput= document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');
const regionInput = document.querySelector('#region');
const postalInput = document.querySelector('#postal');
const countryInput = document.querySelector('#country');
const trackInput = document.querySelector('#track');
const openInput = document.querySelector('#open');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
       e.preventDefault();

       if(firstNameInput.value===''||
       lastNameInput.value===''||
       emailInput.value===''||
       phoneInput.value===''||
       addressInput.value===''||
       regionInput.value===''||
       postalInput.value===''||
       countryInput.value===''||
       trackInput.value===''||
       openInput.value===''
       ){
              msg.classList.add('error');
              msg.innerHTML = 'Please enter all fields';
              setTimeout(() => msg.remove(), 3000);
       }
       else{
              const li = document.createElement('li');
              li.appendChild(document.createTextNode(`
                     {"${firstNameInput.value}" , 
                     "${lastNameInput.value}" ,
                     "${emailInput.value}" ,
                     "${phoneInput.value}" ,
                     "${addressInput.value}" ,
                     "${regionInput.value}" ,
                     "${postalInput.value}" ,
                     "${countryInput.value}" ,
                     "${trackInput.value}" ,
                     "${openInput.value}"}
              `));

              userList.appendChild(li);

              firstNameInput.value = '';
              lastNameInput.value = '';
              emailInput.value = '';
              phoneInput.value = '';
              addressInput.value = '';
              regionInput.value = '';
              postalInput.value = '';
              countryInput.value = '';
              trackInput.value = '';
              openInput.value = '';
       }
}

const inputEl = document.querySelectorAll("input");
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function storeData(){
    const storeData = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(storeData);
}

function isValidate(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent = "Please Fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    if(password1El.value===password2El.value){
        passwordMatch = true
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    }else{
        passwordMatch = false;
        message.textContent = "Make sure your password is match";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }

    if(isValid && passwordMatch){
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function formValidation(e){
    e.preventDefault();
    isValidate();
    if(isValid && passwordMatch){
        storeData();
    }
}

form.addEventListener("submit", formValidation);

inputEl.forEach(element => {
    element.addEventListener("focus",() => {
        if(element.focus){
            element.classList.add("invalide");
        }else{
            element.classList.remove("invalide");
        }
    });
});


/*function setFormMessage(formElement,type, message){
    const messageElement = formElement.querySelector('.form__message');

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}*/

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;

}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", ()=>{
    const login = document.querySelector('#loginAccount');
    const creatAccountForm = document.querySelector("#createAccount");

    document.querySelector('#create').addEventListener('click', e =>{
        e.preventDefault();
        creatAccountForm.classList.add('form-visible');
        login.classList.add('form-hidden');
    });
    document.querySelector('#signIn').addEventListener('click', e =>{
        e.preventDefault();
        creatAccountForm.classList.remove('form-visible');
        login.classList.remove('form-hidden');
    });

    /*login.addEventListener('submit', e =>{
        e.preventDefault();

        //Perform your Ajax/fetch login

        setFormMessage(login, 'error', "Invalid username/password combination");
    });*/

    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener('blur', e =>{
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "username must be at least 10 characters in length");
            };
        });

        inputElement.addEventListener("input", e =>{
            clearInputError(inputElement);
        });
    });
    
});

//Logging to another Page
var objPeople = [
    {
        username: "taofeek",
        password: "taofeek" 
    },
    {
        username: "Daniel@gmail.com",
        password: "daniel"
    },
    {
        username: "Chris@gmail.com",
        password: "forever"
    }
]


function getInfo(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for(i = 0; i < objPeople.length; i++){
       
        if(username == objPeople[i].username && password === objPeople[i].password){
            window.location.href = "school.html";
            document.querySelector('.form__message--error').style.display = "none";
        }else{
            document.querySelector('.form__message--error').innerHTML = "Incorrect login details";
        }
    }
}
//Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = doucment.getElementById('message');
    resetBtn = document.getElementById('resetBtn');
    sendEmailForm = document.getElementById('email-form');


//Event Listners
eventlisteners();

function eventListeners(){
    //App Init
    document.addEventListener('DOMContentLoaded',appInit);

    //Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //Send email & reset button
    sendEmailForm.addEventListener('submit',sendEmail)
    resetBtn.addEventListener('click', resetForm);
}


//Functions

//App Initialization
function appInit(){
    //disable the send button on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('spinner');
    spinner.style.display = 'block';

    //Show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide spinner then show send email image
    setTimeout(function(){

        //hide the spinner
        spinner.style.display = 'none';

        //show image
        document.querySelector('#loaders').appendChild(sendEmailImg);

        //after 5 seconds, hide image, reset form
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();

        }, 5000);

    }, 3000);
}

//Validate the fields
function validateField(){
    let errors;

    //Validate the Length of the field
    validateLength(this);

    //Validate the email
    if(this.type === 'email'){
        validateEmail(this);
    }

    //Both will return errors, then check if there're any error
    errors = document.querySelectorAll('.error');

    //Check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            //the button should be enabled
            sendBtn.disabled = false;
        }
    }
}

//Validate the length of the fields
function validatelength(field){
    if(field.value.length > 0){
        field.sytle.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.sytle.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Validate email (checks for @ in the value)
function validateEmail(field){
    let emailText = field.value;

    //check if the emailText contains the @ sign
    if(emailText.indexOf('@') !==-1) {
        field.sytle.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.sytle.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Reset the form
function resetForm(){
    sendEmailForm.reset();

}
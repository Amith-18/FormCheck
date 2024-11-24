
// var nameError   =   document.getElementById('name-error');
// var phoneError   =   document.getElementById('phone-error');
// var emailError   =   document.getElementById('email-error');
// var messageError   =   document.getElementById('message-error');
// var submitError   =   document.getElementById('submit-error');


// function validateName(){
//     var name    = document.getElementById('contact-name').value;

//     if(name.length  == 0){
//         nameError.innerHTML =   'Name is Required';
//     }

//     if(!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
//         nameError.innerHTML =   '*Name is required';
//         return false;
//     }
//     nameError.innerHTML =   '<i class="fa-sharp fa-solid fa-circle-check" style="color: #31d12e;"></i>';
//     return true;
    
// }

// function validatePhone(){
//     var phone   =   document.getElementById('contact-phone').value;
//     if(phone.length == 0){
//         phoneError.innerHTML    =   'Invalid';
//         return false;
//     }

//     if(phone.length != 10){
//         phoneError.innerHTML    =   'Invalid';
//         return false;
//     }

//     if(!phone.match(/^[0-9]{10}$/)){
//         phoneError.innerHTML    =   'Only digits';
//         return false;
//     }

//     phoneError.innerHTML    =   '<i class="fa-sharp fa-solid fa-circle-check" style="color: #31d12e;"></i>';
//     return true;
// }

// function validateEmail(){
//     var email   =   document.getElementById('contact-email').value;

//     if(email.length == 0){
//         emailError.innerHTML =   'Email is required';
//         return false;
//     }

    // if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-a]*[\.][a-z]{2,4}$/)){
    //     email.innerHTML =   'Email Invalid';
    //     return false;
    // }

//     if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
//         emailError.innerHTML = '*Please enter a valid email address.';
//         return false;
//     }

//     emailError.innerHTML    =   '<i class="fa-sharp fa-solid fa-circle-check" style="color: #31d12e;"></i>';
//     return true;
// }


// function validateMessage(){
//     var message = document.getElementById('contact-message').value;
//     var required = 30;
//     var left = required - message.length;

//     if(left > 0){
//         messageError.innerHTML  =  left + ' more characters required';
//         return false;
//     }

//     messageError.innerHTML    =   '<i class="fa-sharp fa-solid fa-circle-check" style="color: #31d12e;"></i>';
//     return true;

// }


// function validateForm(){

//     if(!validateName() && validateForm() && validateEmail() && validateMessage()){
//         submitError.style.display   =   'block';
//         submitError.innerHTML   =   '*please fix the error';
//         setTimeout(function(){
//             submitError.style.display   =   'none'; 
//         },3000)
//         return false;  
//     }
        
// }



// Get references to error elements
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// Reusable function to set error message
function setError(element, message) {
    element.innerHTML = message;
}

// Function to set success message
function setSuccess(element) {
    element.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="color: #31d12e;"></i>';
}

// Validate Name
function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        setError(nameError, 'Name is Required');
        return false;
    }

    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
        setError(nameError, '*Name must be two words');
        return false;
    }

    setSuccess(nameError);
    return true;
}

// Validate Phone
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0 || phone.length !== 10 || !/^[0-9]{10}$/.test(phone)) {
        setError(phoneError, 'Invalid phone number');
        return false;
    }

    setSuccess(phoneError);
    return true;
}

// Validate Email
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        setError(emailError, 'Email is required');
        return false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
        setError(emailError, '*Please enter a valid email address.');
        return false;
    }

    setSuccess(emailError);
    return true;
}

// Validate Message
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        setError(messageError, left + ' more characters required');
        return false;
    }

    setSuccess(messageError);
    return true;
}

// Validate the entire form
function validateForm() {
    // Check all fields, if any fails return false and show error message
    var isValid = validateName() && validatePhone() && validateEmail() && validateMessage();

    if (!isValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = '*Please fix the error';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
    }

    return isValid;
}

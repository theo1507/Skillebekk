/* Send Mail + Response
-----------------------------------------------------*/

let messageWarning = $('.message-warning')
let messageSuccess = $('.message-success')
let sLoader = $('.submit-loader')
let contactFormEl = document.querySelector("#contactForm");

function SendMail() {
    var params = {
        from_name : document.querySelector("#contactName").value,
        email_id : document.querySelector("#contactEmail").value,
        subject : document.querySelector("#contactSubject").value,
        message : document.querySelector("#contactMessage").value
    }
        if(params.from_name == '' || params.email_id == '' || params.subject == '' || params.message == '') {
            sLoader.fadeIn()
                setTimeout(() => {
                    sLoader.fadeOut();
                }, 800);
                setTimeout(() => {
                    messageWarning.fadeIn();
                }, 1200);
            }
        else {
            sLoader.fadeIn()
                setTimeout(() => {
                    sLoader.fadeOut();
                }, 800);
                setTimeout(() => {
                    messageSuccess.fadeIn();
                    messageWarning.style.display = 'none';
                }, 1200);
            emailjs.send("service_8khiedj","template_ljrjdzc", params);
        }
}

//Get form element
function submitForm(event){

//Preventing page refresh
   event.preventDefault();
   SendMail();
}

//Calling a function during form submission.
contactFormEl.addEventListener('submit', submitForm);
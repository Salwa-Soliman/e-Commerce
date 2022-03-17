var formElements = document.querySelectorAll('.form-element'),
    errorMsgs = document.querySelectorAll('.error-messages p'),
    invalidCount;
var username;

function validateForm(e) {
    e.preventDefault();
    invalidCount = 0;
    validate('name', /^[a-z ]{3,20}$/i, 0);
    validate('email', /^([a-z\d\._]{3,20})@([a-z]{3,6})\.([a-z]{3,7})$/i, 1);
    validate('phone', /^(01[0-9]{9})$/, 2);
    validate('msg', /^[a-z\d\._]{5,500}$/i, 3);

    if (invalidCount == 0) {
        document.querySelector('.username').innerText = formElements[0].value;

        document.querySelector('.contact-form').style.opacity = '0';

        document.querySelector('.recieved').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.recieved').style.opacity = 1;
            document.querySelector('.contact-form').style.display = 'none';
        }, 1000);
    }
}


function validate(id, pattern, index) {
    var element = formElements[index];

    if (element.value.match(pattern)) {
        errorMsgs[index].style.opacity = 0;
    } else {
        invalidCount++;
        errorMsgs[index].style.opacity = 1;
    }
}
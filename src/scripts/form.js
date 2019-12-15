
const myForm = document.querySelector('#myForm');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", myForm.elements.name.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.form__textarea.value);
    formData.append("to", "n.jelonkina@mail.ru");

    if (validateForm(myForm)) {

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
    } 
   
 
})


function validateForm(form) {

    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.form__textarea)) {
        valid = false;
    }

    return valid;

}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}
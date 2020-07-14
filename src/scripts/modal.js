const validationFields = (form, fieldArray) => {
  
  fieldArray.forEach( field => {
    field.removeClass('input-error');

    if(field.val().trim() === "") {
      field.addClass('input-error');
    }

  });

  const errorFields = form.find('.input-error');

  return errorFields.length === 0;
};


$('#myForm').submit(evt => {
  evt.preventDefault();

  const form = $(evt.currentTarget);
  const name = form.find("[name = 'name']");
  const phone = form.find("[name = 'phone']");
  const comment = form.find("[name = 'form__textarea']");
  const to = form.find("[name = 'to']");

  const isValid = validationFields(form, [name, phone, comment, to]);

  const modal = $('#modal');
  const content = modal.find('.modal__content');
 
  modal.removeClass('error-modal');

  if (isValid) {

    const request =  $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: 'post',
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      }
    });
  
    request.done (data => {
      content.text(data.message);
    });

    request.fail(data => {
      content.text(data.responseJSON.message);
      modal.addClass('error-modal');
    });


    request.always(() => {
      $.fancybox.open({
        src: '#modal',
        type: 'inline'
      });
    });
  }
  
});

$('.app-close-modal').on('click', evt => {
  evt.preventDefault();

  $.fancybox.close();
});
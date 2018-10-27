$(function(){
    $('#btnSubmit').on('click', submit);


    function submit(){
        $("#success").html("");
        var errorsEl = $('#errors');
        var errors = '';
        var firstName = $('#firstName');
        var firstNameValue = firstName.val();


        var email = $('#email');
        var emailValue = email.val();

        if (firstNameValue === '') {
            errors += 'First name can not be empty.</br>';
            firstName.addClass('invalid');
        }

        if (emailValue === '') {
            email.addClass('invalid');
            errors += 'Email Address can not be empty.</br>';
        } else if (emailValue.indexOf('@') === -1) {
            email.addClass('invalid');
            errors += emailValue + ' is not a valid email addresss</br>';
        }
        if(errors != '') {
            errorsEl.html(errors);
        } else {
            $("#success").html("Great success!");
        }
    }
});


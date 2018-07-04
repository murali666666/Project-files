var cardHeader= $('#form-card-header');
var cardTitle=$('.card-title');
var submitButton=$('#submit-button');

$('#login-button').click(function() {
    cardHeader.removeClass('bg-warning');
    cardHeader.removeClass('bg-teal').addClass('bg-success');
    cardTitle.text('login Here');
    submitButton.removeClass('btn-teal');
    submitButton.removeClass('bg-warning').addClass('btn-success');
    submitButton.text('login');
});
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal');
    cardHeader.removeClass('bg-success').addClass('bg-warning');
    cardTitle.text('Register');
    submitButton.removeClass('btn-teal');
    submitButton.removeClass('bg-warning').addClass('btn-warning');
    submitButton.text('Register');
});
$('#register-button').click(function() {
    cardHeader.removeClass('bg-warning');
    cardHeader.removeClass('bg-teal').addClass('bg-success');
    cardTitle.text('login Here');
    submitButton.removeClass('btn-teal');
    submitButton.removeClass('bg-warning').addClass('btn-success');
    submitButton.text('login');
});
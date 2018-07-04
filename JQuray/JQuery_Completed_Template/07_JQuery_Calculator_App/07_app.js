/* Add your JQuery code Here */
$('#plus-button').click(function() {
   $('#operator').text('+');
});
$('#minus-button').click(function() {
    $('#operator').text('-  ');
});
$('#div-button').click(function() {
    $('#operator').text('/');
});
$('#mul-button').click(function() {
    $('#operator').text('*');
});
$('#equals_button').click(function() {
    var num1 = parseFloat($('#first_number').val());
    var num2 = parseFloat($('#second_number').val());
    var opr = $('#operator').text().trim();
    var result = 0;
    switch (opr){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    $('#result_button').text(result);
});

$('#clear-button').click(function() {
    $('#first_number').val('');
    $('#second_number').val('');
    $('#operator').text('+');
    $('#result_button').text('RESULT');
});
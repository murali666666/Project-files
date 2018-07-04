$('#success-button').click(function() {
    $('#success-card').fadeToggle();
    var btnValue = $(this).attr('value');
    if (btnValue === 'HIDE'){
        $(this).attr('value','SHOW');
    }
    else
    {
        $(this).attr('value','HIDE');
    }
});
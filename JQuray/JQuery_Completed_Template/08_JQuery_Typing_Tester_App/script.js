//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

var textAres = $('#text-area');
var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;

function leadingZero(time) {
    if(time<=9)
    {
        return "0" +time;
    }
    else
    {
        return time;
    }

}

function startTimer()
{
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
    $('#minutes').text(leadingZero(minutes));
    $('#seconds').text(leadingZero(seconds));
    $('#milli-seconds').text(leadingZero(milliSeconds));

    timer++;
}

textAres.keypress(function() {
    var textEnteredLength = $('#text-area').val().length;
    if (textEnteredLength === 0)
    {
        //start the timer
        setInterval(startTimer,10);

    }
});

textAres.keyup(function() {
    var textEntered = $('#text-area').val();
    var originalText = $('#original-text').text();
    var partialText= =originalText.substr(0,textEntered.length);
    var message = $('#message');
    var messageCard = $('#message-card');
    if (textEntered===originalText)
    {
        message.text('Congratulations');
        messageCard.removeClass('bg-light').removeClass('bg-teal').addClass('bg-danger').addClass('bg-success');
    }
    else



});
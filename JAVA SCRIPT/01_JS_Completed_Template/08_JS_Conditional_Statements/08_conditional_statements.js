// If Else condition Example
var cureseCompleted=true;
var practiceCompleted=false;
var output="";
if (cureseCompleted&&practiceCompleted)
{
    output="youll get job soon";
}
else if (cureseCompleted && !practiceCompleted)
{
    output="start practicing";
}
else
{
    output="please join any course"
}

// For loop Example to display from 1 - 10 values
output="";
for(var a=1;a<=10;a++)
{
    console.log(a);
    if (a<=9)
    {
        output+=a+",";
    }
    else
    {
        output+=a;
    }
}
document.getElementById('display').innerHTML=output;
// While loop Example to display from 1 - 10 values
var b=1;
while (b<=10)
{
    console.log(b);
    b++;
}

// Do while loop Example to display from 1 - 10 values
/*b=1;
do {
    if (b<=9)
    {
        output+=b+"^";
    }
    else
    {
        output+=b;
    }
}
while (b<=10)
console.log(output);
document.getElementById('display').innerHTML=output;
*/ // Switch Statement Example to display full Day
output="today is : ";
var today = new date().getDate();
console.log(today);
switch (today)
{
    case 0:
        output+='sunday';
        break;
        case 1:
    output+='tuesday';
    break;
case 2:
    output+='wednesday';
    break;
case 3:
    output+='day';
    break;
case 4:
    output+='sunday';
    break;
default:
    output+='donno';
    break;
}
    console.log(output);
    document.getElementById('display').innerHTML=output;


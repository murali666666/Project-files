//BOM Operations

// width of the browser
var width= window.innerWidth;
console.log('width of the browser is '+ width + "px");
document.getElementById('display').innerHTML='width of the browser is '+ width + "px";
// Open a new Tab
window.open();
// DOM Properties to get body , title , URL
var body=document.body;
console.log(body);


 var title=document.title;
 var output="title: "+title;
 console.log(output);
 document.querySelector('#display').innerHTML=output;

 var url = document.URL;
 console.log(url);
document.querySelector('#display').innerHTML=url;

//DOM Manipulation

var time=10;
if (time <= 10){
    document.querySelector('#display').innerHTML="Good Morning";
}
else if(time>12 && time <= 17){
    document.querySelector('#display').innerHTML="Good afternoon";
}
else {
    document.querySelector('#display').innerHTML = "Good Evening";
}
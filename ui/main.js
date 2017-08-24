console.log('Loaded!');

var counter =0;
var btn = document.getElementById("btn");
btn.onClick = function(){
    counter = counter+1;
    var span = document.getElementById("btn");
    span.innerHTML = counter.toString();
};
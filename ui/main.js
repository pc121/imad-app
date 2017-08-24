console.log('Loaded!');

var btn = document.getElementById("btn");
btn.onClick = function(){
    counter = counter+1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}
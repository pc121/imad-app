//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function  ()
    {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request === 200){
              //Teake action
              var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();    
          }
      }
      //What to do
    };

request.open('GET','http://chawarepappu.imad.hasura-app.io/counter',true);
request.send(null);

};
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

//make request
request.open('GET','http://chawarepappu.imad.hasura-app.io/counter',true);
request.send(null);

};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value; 
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //Make a request to server
  
  //Capture a list of names
  var names = ['pappu','aheeto','dada'];
  var list = '';
  for(var i=0; i<names.length; i++){
      list+= '<li>' + names[i] + '</li>';
  }
  var ul  = document.getElementById('list');
  ul,innerHTML = list ;
    
};
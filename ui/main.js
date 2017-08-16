console.log('Loaded!');
// adding element
/*var element= document.getElementById("main-text");
element.innerHTML="My new html Page";
// Move the image
var img= document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function()
{
    var interval= setInterval(moveRight,50);
};*/
// Counter code
var button = document.getElementById("counter"); 
button.onclick = function(){
    // Create a request
   /* var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }*/
        request.open('GET','http://http://prasannageetha.imad.hasura-app.io/counter',true);
        request.send(null);
    };
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
    //Creat a request object
    var request = new XMLHttpRequest();

    //Capture the response and state and store it in a varible
    request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      //Take some action
      if (request.status === 200) {
            //var names = ['name1','name2','name3','name4'];
            var names = request.responseText;
            alert('names : '+names);
            names = JSON.parse(names);
            var list = '';
            for (i=0;i<names.length;i++){
                alert('name[i] : '+names[i]);
                list += '<li>' + names[i] + '</li>';
            }  
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
          /*var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();*/
      }
  }
  // Not done yet
};

        // Make the request
        //request.open('GET', 'http://prasannageetha.imad.hasura-app.io/counter', true);
        var nameInput = document.getElementById('name');
        name = nameInput.value;
        alert("name :"+name);
        request.open('GET', 'http://prasannageetha.imad.hasura-app.io/submit-name?name=' + name, true);
        request.send(null);
        // Make a request
        //var counter = 0;
        //counter = counter+1;
        //request.open('GET','http://http://prasannageetha.imad.hasura-app.io/counter',true);
        //request.send(null);
        //var span = document.getElementById("count");
        //span.innerHTML = counter.toString();
    //};
};
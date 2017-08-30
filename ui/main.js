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
//var button = document.getElementById("counter"); 
//button.onclick = function(){
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
//        request.open('GET','http://prasannageetha.imad.hasura-app.io/counter',true);
//        request.send(null);
//    };
    var submit = document.getElementById('submit_btn');
    submit.onclick=function(){
        
    // create a request object
    var request = new XMLHttpRequest();
    
    // catpture the response and store it in a variable
    request.onreadystatechange = function(){
        //request.responeType = "text";
        console.log("========");
        // Take some action
        if(request.readyState === XMLHttpRequest.DONE)
        {
            console.log("!!!!!!" + request.status );
            if(request.status === 200){
                console.log("User Logged In Successfully!");
                alert('Logged in Successfully');
            }
            else if (request.status === 403)
            {
                alert('Username/Password Incorrect');
            }
            else if (request.status === 500)
            {
                alert('Something went wrong on the server');
            }
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //var name = username.value;
    //alert('name : '+name);
    console.log(username);
    console.log(password);
    request.open('POST','http://prasannageetha.imad.hasura-app.io/login', true);
    console.log('-----');
    request.setRequestHeader('Content-Type', 'application/JSON');
    console.log('-----');
    //request.send(JSON.stringify({"username":username, "password":password})); 
    request.send(JSON.stringify({'username':username,'password':password}));
     console.log('--===---');
        // Make a request
        //var counter = 0;
        //counter = counter+1;
        //request.open('GET','http://http://prasannageetha.imad.hasura-app.io/counter',true);
        //request.send(null);
        //var span = document.getElementById("count");
        //span.innerHTML = counter.toString();
    //};
};
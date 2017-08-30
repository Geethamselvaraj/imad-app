console.log('Loaded!');
    var submit = document.getElementById('submit_btn');
    submit.onclick=function(){
        
    // create a request object
    var request = new XMLHttpRequest();
    
    // catpture the response and store it in a variable
    request.onreadystatechange = function(){
        
        // Take some action
        if(request.readyState === XMLHttpRequest.DONE)
        {
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
    console.log(username);
    console.log(password);
    //request.open('POST','http://prasannageetha.imad.hasura-app.io/login', true);
    request.open('POST','/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({"username":username,"password":password}));
};
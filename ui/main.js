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
    submit.onclick=function(){
         var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                    list+='<li>' + names[i] + '</li>';
            }  
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;

            }
        }
    };
    var nameinput = document.getElementById('name');
    var name = nameinput.value;

    request.open('GET','http://venisavitri.imad.hasura-app.io/submit-name?name=' + name,true);
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
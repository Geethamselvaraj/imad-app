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
var counter = 0;
console.log("button: "+button);
button.onclick = funtion(){
    counter = counter+1;
    var span = document.getElementById("count");
    console.log("Counter :"+counter);
    span.innerHTML = counter.toString();
};
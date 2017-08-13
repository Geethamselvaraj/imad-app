console.log('Loaded!');
// adding element
var element= document.getElementById("main-text");
element.innerHTML="My new html Page";
// Move the image
var img= document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    marignLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function()
{
var interval= setInterval(moveRight,100);
};
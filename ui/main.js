console.log('Loaded!');
// adding element
var element= document.getElementById("main-text");
element.innerHTML="My new html Page";
// Move the image
var img= document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    alert("Inside moveright fn");
    marignLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function()
{
    alert("insert onclick");
    var interval= setInterval(moveRight,50);
};
console.log('loaded img');
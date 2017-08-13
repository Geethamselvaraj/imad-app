console.log('Loaded!');
// adding element
var element= document.getElementById("main-text");
element.innerHTML="My new html Page";
// Move the image
var img= document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    console.log("Inside moveright fn :"+marginLeft);
    marignLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
    console.log("moveright :"+marginLeft);
}
img.onclick = function()
{
    console.log("insert onclick");
    var interval= setInterval(moveRight,50);
    console.log("interval :"+interval);
};
console.log('loaded img');
var outer_circle = document.getElementById("outer_circle");
var inner_circle = document.getElementById("inner_circle");
inner_circle.addEventListener("mouseenter", function(){
    outer_circle.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
});
inner_circle.addEventListener("mouseleave", function(){
    outer_circle.style.backgroundColor = 'rgba(255, 255, 255, 0)';
});
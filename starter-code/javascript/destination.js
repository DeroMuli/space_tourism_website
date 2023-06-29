var btns = document.querySelectorAll(".btn_group button");
var prev_active_button = document.getElementById("moon");
var destination_img = document.getElementById("destination_img");
var destination_description = document.getElementById("destination_description");
var destination_name = document.getElementById("destination_name");
var destination_distance = document.getElementById("destination_distance");
var travel_time = document.getElementById("travel_time");

var active_border = "3px solid rgb(255, 255, 255,1)";
var inactive_border = "3px solid rgb(255, 255, 255,0)";
prev_active_button.style.borderBottom = active_border;


btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        //check why hover styling stops working after clicking on a button
        prev_active_button.style.borderBottom = inactive_border;
        btn.style.borderBottom = active_border;
        prev_active_button = btn;
        changeImageNdescription(btn.id);
    });
}
);

function changeImageNdescription(button_id){
    switch(button_id){
        case "mars": 
            destination_img.src = "./assets/destination/image-mars.png";
            destination_description.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
            destination_name.innerHTML = "Mars";
            destination_distance.innerHTML = "225 mil. km";
            travel_time.innerHTML = "9 months";
            break;
        case "moon":
            destination_img.src = "./assets/destination/image-moon.png";
            destination_description.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
            destination_name.innerHTML = "Moon";
            destination_distance.innerHTML = "384,400 km";
            travel_time.innerHTML = "3 days";
            break;
        case "europa":
            destination_img.src = "./assets/destination/image-europa.png";
            destination_description.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
            destination_name.innerHTML = "Europa";
            destination_distance.innerHTML = "628 mil. km";
            travel_time.innerHTML = "3 years";
            break;
        case "titan":
            destination_img.src = "./assets/destination/image-titan.png";
            destination_description.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            destination_name.innerHTML = "Titan";
            destination_distance.innerHTML = "1.6 bil. km";
            travel_time.innerHTML = "7 years";
            break;
        default:
            console.log("Error");
    }
}
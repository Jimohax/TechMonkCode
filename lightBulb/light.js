let bulb = document.getElementById("bulbOff");

function turnOn() {
	bulb.src = "./images/LightBulbOn.jpg";
}
function turnOff() {
	bulb.src = "./images/LightBulbOff.jpg";
}
P
function lightBulb(flip) {
    
    if (flip > 0){
        console.log( "Light has been turned on "  + flip);

        bulb.src = "./images/LightBulbOn.jpg"
    }else{
        console.log( "Light has been turned off "  + flip);

        bulb.src = "./images/LightBulbOff.jpg"
    }
    console.log("We did it ");
}

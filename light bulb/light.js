let bulb = document.getElementById("bulbOff");

function turnOn() {
	bulb.src = "LightBulbOn.jpg";
}
function turnOff() {
	bulb.src = "LightBulbOff.jpg";
}
P
function lightBulb(flip) {
    
    if (flip > 0){
        console.log( "Light has been turned on "  + flip);

        bulb.src = "LightBulbOn.jpg"
    }else{
        console.log( "Light has been turned off "  + flip);

        bulb.src = "LightBulbOff.jpg"
    }
    console.log("We did it ");
}

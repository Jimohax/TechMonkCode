let a;
let b;
let c;
let counter = 0 ;

document.getElementById("increase").onclick = function(){
    counter += 1
    document.getElementById('counter').innerHTML = counter 
}
document.getElementById("decrease").onclick = function(){
    counter -= 1
    document.getElementById('counter').innerHTML = counter 
}
document.getElementById("reset").onclick = function(){
    counter = 0
    document.getElementById('counter').innerHTML = counter 
}



function calc() {
    a = Number(document.getElementById("sideA").value) ;
    b = Number(document.getElementById("sideB").value) ;
    
    c = (a*2 + b*2)
    // document.getElementById("result").innerHTML = c
    
    // console.log("The answer is " + c);

    document.getElementById("result").innerHTML = "The answer is" + " " + c
}
alert("SIMPLE CALCULATOR BY T.HARIN PRANAV")

document.body.style.zoom = "80%"

const Display = document.getElementById("display")

function number(value){

Display.value += value;

}

function numberanswer(){

try{
Display.value = eval(display.value);
}

catch{
Display.Value = "Error"
}

}


function numberclear(value){

Display.value = value

}


const textBox = document.getElementById("textBox");
const ToFahreith = document.getElementById("ToFahreith");
const ToCelcius = document.getElementById("ToCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
 if (ToFahreith.checked) {
  temp = Number(toBox.value);
  temp = temp * 9/5 + 32;
  result.textContent = temp.toFixed(1) + "F";
 } 

 else if(ToCelcius.ckecked){
 temp = Number(textBox.value);
 temp = (temp - 32) * temp.toFixed(1) + "C"; 
 }

else{
  result.textContent ="Select a unit";
}

}



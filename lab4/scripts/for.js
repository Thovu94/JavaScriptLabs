function setForLoopValues(){
var minimum = Number(prompt("Enter a minimum value",""));
var maximum = Number(prompt("Enter a maximum value",""));
var increase = Number(prompt("Increase the value of number",""));
for (var i=minimum; i<maximum; i+=increase){
  document.writeln("The value is "+i+"</br>");
}
}
setForLoopValues();

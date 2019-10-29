
/*var index = prompt("Enter a number","");
var i = 0;

while (i < index) {
    document.writeln("value is: " + i + "</br>");
    i++;
}
*/
function getNumber() {
var index = Number(prompt("Enter a number ","(1-100)"));
var i = 0;
while (i < index) {
  document.writeln("Value is: " + i + "</br>")
  i+=10;
}
}
getNumber();

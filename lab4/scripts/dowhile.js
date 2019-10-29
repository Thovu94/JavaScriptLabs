function guessTheNumber(){
var secret = 1;
 do {
    guess = Number(prompt("Enter a number from 1 to 10",""));
}
while (guess != secret)
    document.writeln("Congratulations!...")
}
guessTheNumber();

//Lab5 - Working with the Document Object Model
//number1
document.getElementById("mainTitle").innerHTML = "Learning about the Document Object Model";
//number2
document.getElementById("mainTitle").setAttribute("align", "center");
//number3
document.getElementById("image1").title="Javascript 1";
//number4
document.getElementById("image1").setAttribute("align", "right");
//number5
var node = document.createElement("LI");
var text = document.createTextNode("August 1996");
node.appendChild(text);
var list2 = document.getElementById("list");
list2.insertBefore(node, list2.childNodes[2]);
//number6
number6 = document.getElementsByTagName('ul')[0];
newItem = document.createElement('li');
newText = document.createTextNode('1.8.2 June 22, 2009 ');
newItem.appendChild(newText);
number6.appendChild(newItem);
//number7
var elmt = document.createElement('li');
var tetnode = document.createTextNode(' 1.6 November 2005');
elmt.appendChild(tetnode);
var item = document.getElementById('list');
item.replaceChild(elmt, item.childNodes[10]);
//number8
var nodelist = document.getElementsByTagName("li").length;
document.write('There are ', nodelist, ' li tags in this file.');

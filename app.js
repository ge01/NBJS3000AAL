/****************************************************
*          Add Array Elements Using a Loop          *
****************************************************/
var name = prompt("Enter your name:", "");
document.write("Hello " + name);

var stuff = new Array(3);

for(i=0; i<3; i++){
  stuff[i] = prompt("Add something to the array: ", "");
}

document.write(stuff[0] + stuff[1] + stuff[2]);

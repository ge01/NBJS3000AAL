/****************************************************
*          Add Array Elements Using a Loop          *
****************************************************/
var name = prompt("Enter your name:", "");
document.write("Hello " + name);

var stuff = new Array(1);

for(i=0; i<3; i++){
  stuff[i] = prompt("Add something to the array: ", "");
}

document.write(stuff[0] + stuff[1] + stuff[2]);

/****************************************************
*       Cool Technique to Print Array Elements      *
****************************************************/
var food = new Array("apples", "pears", "bacon", "tuna", "ham");
food.sort();

for(i=0; i < food.length; i++) {
  document.write(food[i] + "<br>");
}

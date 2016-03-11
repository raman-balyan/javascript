/* PROBLEM:
Write a program that creates a string that represents an 8×8 grid,
using newline characters to separate lines. At each position of the
grid there is either a space or a “#” character. The characters should
form a chess board. Program it in a way so that it works for any size,
outputting a grid of the given width and height. 

An 8X8 board should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

size = 8;
output = "";

for(var x=0; x<size; x++){
  for(var y=0; y<size; y++){
    if((x+y)%2==0){
      output += " ";
    }
    else{
      output += "#";
    }
  }
  output += "\n";
}

console.log(output);
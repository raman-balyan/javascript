/* PROBLEM:
Write a function countChar which counts the number of occurence
of a particular character in a string. The first argument of a
function is a string and second argument is a character that is 
to be counted from the string.
 */


function countChar(string, character){
  count=0;
  for(var i=0; i<string.length; i++){
    if(string.charAt(i)==character){
      count += 1;
    }
  } 
  return count;
}

console.log(countChar("asdjhaaaaa", "a"));
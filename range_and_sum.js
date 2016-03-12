/* PROBLEM:
Write a range function that takes three arguments start, end and step
and returns an array containing all the numbers from start up to 
(and including) end. The “step” value is used to build up the array.
If no step is given, the array elements go up by increments of one. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers.

 */

//range function
function range(start, end, step){
  var array = [];
  if(step == null){
    step = 1;
  }
  if(step > 0){
    for(var i = start; i <= end; i += step){
      array.push(i);
    }
  }
  else{
    for(var i = start; i >= end; i += step){
      array.push(i);
    }
  }

  return array;
}

console.log(range(1,10));

//sum function
function sum(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }

  return total;
}

console.log(sum(range(1,10)));
/* Write a program that uses console.log to print all the numbers 
from 1 to 100, with three exceptions. For numbers divisible by 3, 
print "Fizz" instead of the number, and for numbers divisible by 5
(and not 3), print "Buzz" instead. Also, print "FizzBuzz", for numbers 
that are divisible by both 3 and 5. */

// creating a for loop
for(num=1; num<101; num++){
  if(num%3==0 && num%5==0){
    console.log("FizzBuzz");
  }
  else if(num%3==0){
    console.log("Fizz");
  }
  else if(num%5==0){
    console.log("Buzz");
  }
  else{
    console.log(num);
  }
}
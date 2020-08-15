var numbers = [1,2,3,4,5,6,7,8,10];
const filtered = () => {return numbers.filter(function evenNumbers(number){
  return number%2 === 0; 
})
  

};

console.log(filtered());

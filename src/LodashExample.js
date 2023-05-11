
//import the lodash module
const lodash = require('lodash')

//Create a function to find a maximum value from number array.
function findMaxValue(arr){
  return lodash.max(arr)
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(arr, num){
  return lodash.filter(arr, (i)=>i > num)
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(arr){
  return arr.map(i => lodash.capitalize(i))
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}

const a =[2,4,6,245,75,13]
const b =["abebe","kebede","mule"]

console.log(findMaxValue(a))
console.log(filterValues(a,13))
console.log(nameInCapital(b))
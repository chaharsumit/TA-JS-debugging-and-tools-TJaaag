// fullName function
function fullName(firstName = '', lastName = ''){
  return firstName + ' ' + lastName;
}

let result = fullName('sumit','chahar');
//test1
let testResultOne= 'summit chhahar';
if(result != testResultOne){
  throw(`${result} is not equal to ${testResultOne}`);
}
//test2
let testResultTwo = 'sumit chahar';
if(result !== testResultTwo){
  throw(`${result} is not equal to ${testResultTwo}`);
}
// NO, the second test won't run if the first gives an error

//totalAmount function
function totalAmount(amount = 0, taxRate = 0){
  return amount + (amount * taxRate);
}

let result = totalAmount(100,12);
console.log(result);

let testResultOne = 1200;
if(result !== testResultOne){
  throw(`${result} is not equal to ${testResultOne}`);
}

let testResultTwo = 1300;
if(result !== testResultTwo){
  throw(`${result} is not equal to ${testResultTWo}`);
}
//No, the second test don't run if first returns an error




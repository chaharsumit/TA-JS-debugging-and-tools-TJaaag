//Add function test

function addTwoNumbers(numA = 0, numB = 0){
  return numA + numB;
}

let result = addTwoNumbers(10,20);
let testResult_one = 10;
if(result !== testResult_one){
  throw(`${result} is not equal to ${testResult_one}`);
}

let testResult_two = 20;
if(result !== testResult_two){
  throw(`${result} is not equal to ${testResult_two}`);
}
let testResult_three = 30;
if(result !== testResult_three){
  throw(`${result} is not equal to ${testResult_three}`);
}
let testResult_four = 55;
if(result !== testResult_four){
  throw(`${result} is not equal to ${testResult_four}`);
}
let testResult_five = 30;
if(result !== testResult_five){
  throw(`${result} is not equal to ${testResult_five}`);
}
let testResult_six = 5;
if(result !== testResult_six){
  throw(`${result} is not equal to ${testResult_six}`);
}

function testAdd(){
  try{
    callback();
    console.log(`pass : `, message);
  }catch(error){
    console.log(error);
    console.log(`Fail : `,message);
  }
}

function addTwoNumbers(numA = 0, numB = 0){
  let result = numA + numB;
  expected = 5;
  if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

testAdd(`adding 10 and 30`, addTwoNumbers(1,20));
testAdd(`adding 12 and 10`, addTwoNumbers(12,10));
testAdd(`adding 11 and 20`, addTwoNumbers(11,20));
testAdd(`adding 10 and 20`, addTwoNumbers(10,20));
testAdd(`adding 20 and 20`, addTwoNumbers(20,20));


// Multiply function test

function mulTwoNumbers(numA = 0, numB = 0){
  return numA * numB;
}

let result = mulTwoNumbers(30,1);
let testResult_one = 10;
if(result !== testResult_one){
  throw(`${result} is not equal to ${testResult_one}`);
}

let testResult_two = 20;
if(result !== testResult_two){
  throw(`${result} is not equal to ${testResult_two}`);
}
let testResult_three = 30;
if(result !== testResult_three){
  throw(`${result} is not equal to ${testResult_three}`);
}
let testResult_four = 55;
if(result !== testResult_four){
  throw(`${result} is not equal to ${testResult_four}`);
}
let testResult_five = 30;
if(result !== testResult_five){
  throw(`${result} is not equal to ${testResult_five}`);
}
let testResult_six = 5;
if(result !== testResult_six){
  throw(`${result} is not equal to ${testResult_six}`);
}

// we can do like this to fix this
function testMul(){
  try{
    callback();
    console.log(`pass : `, message);
  }catch(error){
    console.log(error);
    console.log(`Fail : `,message);
  }
}

function mulTwoNumbers(numA = 0, numB = 0){
  let result = numA + numB;
  expected = 5;
  if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

testMul(`adding 10 and 2`, mulTwoNumbers(10,2));
testMul(`adding 12 and 3`, mulTwoNumbers(12,3));
testMul(`adding 4 and 8`, mulTwoNumbers(4,8));
testMul(`adding 5 and 6`, mulTwoNumbers(5,6));
testMul(`product of 2 and 10`, mulTwoNumbers(2,10));







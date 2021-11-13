//      JS Class  - 2     \\
//      `````````````      \\
//
//
//-->>  '1. Nesting of If...else
var x = 1200,
    y = 230,
    z = 45
if(x>y){
  if(x>z)
    console.log(x)
  else
    console.log(z);
}
else{
  if(y>z)
    console.log(y);
  else
    console.log(z);
}
//
//
//-->>  '2. Switch Statement
var x = 'A+'
switch (x){
  case 'A+':
    console.log('80-100');
    break;
  case 'A-':
    console.log('70-80');
    break;
  case 'B+':
    console.log('60-70');
    break;
  default:
    console.log('failtush');
    break;
}
//
//
//-->>  '3. Conditional Operator
var x = 5
// if(x==5){
//   console.log('5');
// }else{
//   console.log('not 5');
// }
var y = (x==5)?'5':'not5'   // similar to if...else condition
console.log(y);
//
//
//-->>  '4. Special JS Function
function add(){
  console.log('ADDING');
}
add()
var result = add // By this line, every functionalities of add is assigned in variable result
result()        //  Here, variable result will work exactly as add() function


function add(){
  console.log('ADDING');
  return 'added'
}
add()
var result = add 
result()        
var r = result()  // here, we are keeping the return value in variable called r
console.log(r);
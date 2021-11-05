//      JS Class  - 2     \\
//      `````````````      \\

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
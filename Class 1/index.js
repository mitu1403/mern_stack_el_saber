//      JS Class  - 1     \\
//      `````````````      \\

//-->>  '1'         
console.log("!ok");
/*
console.log():
    - method writes a msg to the console.
    - is useful for testing purposes.
*/
//
//
//-->>  '2'
var name = 'fahim';
var pos = "student";
var country = "Bangladesh";
//   Printing in console.log()
//            :
//          \ : /
//           \:/
//            '
console.log("My name is " + name)
console.log("I am a " + pos)
console.log("I am from " + country)
/*
  var name            =>  Variable Declaration [ value is not assigned ]

  name = 'fahim'      =>  Value Assigning [ variable is declared earlier value is assigned later ]
  
  var name = "Fahim"  =>  Initialization  [ variable and value is declared and assigned consecutively ]
*/
//
/*
              Primitive Values  -->  1. Boolean type
            /                        2. Null type
           /                         3. Undefined type
  JS Types:                          4. Number type
           \                         5. BigInt type
            \                        6. String     
              Objective Values
*/
//
//
//-->>  '3'
var pos = 0
console.log(Boolean(pos))         // if the value of a variable is 0 thn "Boolean == False"

var name = 'fahim';
console.log(Boolean(name))      // "Boolean == True" if variable != 0

var cntry ;
console.log(Boolean(cntry)) // if value is not assigned in a variable it will also show False
//
//
//-->>  '4'
console.log(typeof name)
console.log(typeof pos)
//
//
//-->>  '5'
var x = 10
var y = '20.5'
console.log( x + y );
console.log( x + Number.parseInt(y));   //  Type Conversion -> string to int
console.log( x + Number.parseFloat(y)); //  Type Conversion -> string to float
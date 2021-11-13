//      JS Class  - 3     \\
//      `````````````      \\
//
//
//-->>  '1. JS Basic Array
var arr0 = []
console.log(arr0);

        //  0 1 2 3 4 5
var arr1 = [1,3,4,5,7,8]
console.log(arr1);

var arr2 = ['a','b','c']
console.log(arr2);

arr1[3] = 9
console.log(arr1);

console.log(arr1[2]);
console.log(arr1[6]);

arr1[6] = 10
console.log(arr1);

arr1[10] = 22
console.log(arr1);

var arr3 = ['a',1,'b',2]
console.log(arr3);      // An array can act like an object in JS
//
//
//-->>  '2. AND OR shorthand
var x = 12
var y = x || 'abxc'
console.log(y); // 12 is a number and its true thats why 12 is printed

var x = 0
var y = x || 'abxc'
console.log(y); // 0 is a false thats why string is printed

var x = 12
var y = 'abxc'|| x 
console.log(y); // 1st e jetake true pabe seta kei niye felbe

var v 
console.log(v && 'lm'); /// Eta bujhi nai
//
//
//-->>  '3. For Loop
var arr4 = [1,2,'a',4,'abv',6]
for( var i=0 ; i<10 ; i++){
        console.log(arr4[i]);
}

for( var i=0 ; i<arr4.length ; i++){
        console.log(arr4[i]);
}

var arr5 = [1,2,3,4,5,6,7,8,9]
var res = 0
for( var i=0 ; i<arr5.length ;i++){
        res = res + arr5[i]
}
console.log(res);

for( var i of arr5){            // 'OF' uses to print the values of array
        console.log(i);
}

for( var i in arr5){            // 'IN' uses to print the index number sequentially
        console.log(i);
}
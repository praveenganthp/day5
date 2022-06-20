// // var array = [1, 2, 3, 4, 5, 6, 7]
// // // for(i=0; i<array.length; i++){
// // //     console.log("the odd ",array[i]%2==0)
// // // }
// // // console.log(array[i])

// // var array1=array%2===0;
// // console.log(array1)

// function numbers(l, r) {
//     // l and r are any given numbers
//     var x=[];
//     var i=l;
//     while(x.push(i++)<r){};
//     return x;        
//   }


// console.log(numbers(10, 19));

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)
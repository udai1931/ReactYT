let arr = ["apple","banana","orange","watermelon"]

let narr = [];

// for(let i=0;i<arr.length;i++){
//     let fruit= arr[i];
//     if(fruit.length>6){
//         narr.push(fruit);
//     }
// }

narr = arr.filter(function(fruit){
    return fruit.length>6
})

console.log(arr);
console.log(narr);
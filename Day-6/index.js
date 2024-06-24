console.log("Day-6");
console.log("Arrays");

// Array
// const filter = (furits, letter) => {
//     return furits.filter(letter);
// }

// let fruit = ["apple","Banana","Cherry","Orange"];
// console.log(filter(fruit));
//let fruit = [4,2,1,6,8,2];
// fruit.push("Kiwi");
// fruit.pop();
// fruit.unshift("Mango");
// fruit.shift();
// fruit.splice(4);
// fruit.map()
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

// for(let fr of fruit){
//     console.log(fr);
// }

// console.log(fruit.sort());
// console.log(fruit.sort().reverse())
//console.log(fruit);

// let noOfFruit = fruit.length;
// console.log(noOfFruit);

// let index = fruit.indexOf("Banana");
// console.log(index)

// Create an array of numbers and write a function to calculate the sum of all elements.
const sumArr = function(num){
    let c = 0;
    for(let i=0;i<num.length;i++){
        c += num[i];
    }
    return c;
}


let num = [21,9,45,7,3,5];
let res = sumArr(num);
console.log(num);
console.log(res);


//Write a function that takes an array and returns a new array with all elements doubled.
const doubleArr = (nums) => {
    let res = [];
    for(let i=0;i<nums.length;i++){
        res[i] = nums[i] * 2;
    }
    return res;
}

let numbers = [1,2,3,4,5];
console.log(doubleArr(numbers));

//Given an array of strings, write a function to return an array containing only the strings that start with a particular letter.
// Write a function to find the maximum and minimum elements in an array of numbers.
const maxMin = (arrs) => {
    return (arrs.sort);
}

let arr = [3,5,2,6,7,3];
let ress = maxMin(arr);
console.log(ress);
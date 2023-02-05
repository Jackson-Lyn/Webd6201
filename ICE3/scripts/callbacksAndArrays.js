/*arrays */


let j = new Array();
console.log('Empty array ${}');
j.push(45);
console.log('now Array ')


// with values 
let k = new Array (10, 20, 30);
console.log ('3 elements: ${k}')


let m = new Array (1);
console.log('array with: ${m}')
m.push(30);
m.push(45)
m[0] = 1
console.log('Array with 3: ${m}')


let s = [1, 34, 56, 99];

function square(x){
    return x*x
}

let newS = s.map (function(val, index){
    return { key: index, value: val * 2};
})

console.log(newS)
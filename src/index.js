// const signature = [1, 1, 1];
// const n = 10;

// function tribonacci(signature,n){  
//     for (let i = 0; i < n; i += 1) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); 

// }

// i = 0

//     1                1              1  
// signature[i] + signature[i+1] + signature[i+2]

// signature = [1, 1, 1, 3] 



// i = 1

    //      1                1              3
    // signature[i] + signature[i+1] + signature[i+2]

    // signature = [1, 1, 1, 3, 5]

// i = 2
    //      1                3              5
    // signature[i] + signature[i+1] + signature[i+2]


// console.log(tribonacci(signature,n));





// Unique characters in a string

// function findUniq(arr) {
//     return +arr.filter( (value) =>  arr.indexOf(value) == arr.lastIndexOf(value));
// }


// console.log(findUniq([1, 1, 1, 1, 1, 1, 1, 1, 10]));
"use strict";
function MaxValue(arr) {
    let val = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > val) {
            val = arr[i];
        }
    }
    return val;
}
let arr = [1, 2, 3, 4, 5];
const ans1 = MaxValue(arr);
console.log(ans1);

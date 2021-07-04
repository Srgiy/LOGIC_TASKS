function minAndMax(arr) {
let obj = {
min : min(arr),
max : max(arr)  
}
function min(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i]
        }
    }
    return arr[0]
}
function max(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i]
        }
    }
    return arr[0]
}
return obj
}
console.log(minAndMax([1,2,3,4,6,3,0,10,-4,1]))

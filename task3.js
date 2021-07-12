function isSorted(arr){
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[0]) {
            arr[0] = arr[i]
        } else {
            return false
        }
    }
    return true
}
console.log(isSorted([1, 2, 5, 3, 3, 5, 6, 12]))
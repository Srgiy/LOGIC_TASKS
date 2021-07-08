function mean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(mean([4, 6, 12, 8, 10]))
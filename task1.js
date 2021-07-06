function factorial(n) {
    if (n != 0)  {
        return n = n * factorial(n-1)
    } else {
        return 1
    }
}
console.log(factorial(3))
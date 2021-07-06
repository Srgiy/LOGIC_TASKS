function amount(n) {
    if (n > 0) {
        return n = n + amount(n - 1)
    } else if (n < 0){
        return n = n + amount(n + 1)    
    } else {
        return n
    }
}
console.log(amount(-4))
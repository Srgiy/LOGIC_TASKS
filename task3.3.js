'use strict';

function delateId(arr) {
const unique = new Set()
let result = []
    
for (let i = 0; i < arr.length; i++){

    if (unique.has(arr[i].id) == false){
        result.push({id: arr[i].id})
    }
    unique.add(arr[i].id)   

}
return result
}

console.log(delateId([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }]))




'use strict';

const sarah = {
    name: 'Sarah',
    job: {
      name: 'Andersen',
      hiringDate: '23.07.2020'
    }
  }
  
let {
    name : userName,
    job : {
    name,
    hiringDate,
    }
} = sarah

console.log(userName)
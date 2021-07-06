
function makeStr (newStr = ""){
    
    return function(str = ""){   

            return newStr = newStr + str;
    };
};

const concat =  makeStr ();

concat("start 1");
concat("secondstep");
concat("finish");
console.log(concat())
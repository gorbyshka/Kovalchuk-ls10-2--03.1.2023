let getСlosure = function () {
    let num = 0;
    return function (x) {
        num += x;
        return num;
    }
};

let sum = getСlosure();

console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(20));

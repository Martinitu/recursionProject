
let fibs = function(num){
    result = [];
if (num == 1){
    result.push(0)
} else {
    result.push(0)
    result.push(1)
            for (let i = 0; i < num - 2; i++)
            result.push(result[i] + result[i + 1])
            console.log(result)
}
}
fibs(6);


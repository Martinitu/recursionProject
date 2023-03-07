
let fibs = function(num){
   let result = [];
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
fibs(8);

function fibsRec(num) {
    if (num <= 0 || isNaN(num)) {
      return "Please enter a valid number."
    } else if (num === 1) {
        return [0]
    } else if (num === 2) {
        return [0, 1]
    } else if (num > 2) {
        return [...fibsRec(num-1), fibsRec(num - 1)[num - 2] + fibsRec(num-1)[num - 3]]
    }
  }
console.log(fibsRec(8));
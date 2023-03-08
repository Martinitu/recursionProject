



const mergeSort = (arr) => {
    if (arr.length === 0) return "you need to enter a non empty array!"
	if (arr.length === 1) return arr;

 let    m =Math.floor(arr.length / 2);
 let    l =  arr.slice(0, m);
 let    r = arr.slice(m, arr.length);

return (merge(mergeSort(l), mergeSort(r)))
}

let  merge = (lArr, rArr) => {
let result = [];
let i = 0;
let j = 0; 
while(i < lArr.length && j < rArr.length){
    if (lArr[i] < rArr[j]){
        result.push(lArr[i])
        i++
      
    } else {
            result.push(rArr[j])
            j++
           
    }
}
    
while (i < lArr.length){
    result.push(lArr[i])
    i++
    
}
while (j < rArr.length){
    result.push(rArr[j])
    j++
  
}
return result

}

console.log(mergeSort([15, 7, 8, 9, 1, 5, 3]))
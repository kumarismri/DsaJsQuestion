// remove duplicates from sorted array

const removeDuplicate = (arr) =>{
    let len = arr.length;
    let res=1;
    for(let i=1;i<len;i++){
        if(arr[i]!==arr[res-1]){
            arr[res]=arr[i];
            res++;
        }
    }
    arr.length = res;
    return arr;
}
const arr=[2,2,2,9,9,30,30];
console.log(removeDuplicate(arr))
// find maximum number of consecutive one

function MaxConsecutive(arr){
    let count =0;
    let res=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]===1){
            count++;
        }else{
            count=0;
        }
        res = Math.max(res,count);
    }
    return res;
}
const arr = [0,1,1,0,1,1,1,0]
console.log(MaxConsecutive(arr))
// find max difference in the array

function MaxDifference(arr){
    let min=arr[0];
    let res=0;
    for(let i=1;i<arr.length;i++){
        min=Math.min(arr[i],min);
        res=Math.max(res,arr[i]-min)
    }
    return res;
}

const arr=[2,3,1,4,8,7,10]
console.log(MaxDifference(arr))
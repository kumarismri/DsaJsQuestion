// Find sum of maximum subarray

function Maxsubarr(arr){
    let maxend=arr[0];
    let res=arr[0];
    let n=arr.length;
    for(let i=1;i<n;i++){
        maxend= Math.max(maxend+arr[i], arr[i]);
        res=Math.max(res,maxend);
    }
    return res;
}

let arr=[-3,8,-2,4,-5,6]
console.log(Maxsubarr(arr))
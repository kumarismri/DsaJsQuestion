// left rotate the element to d places
function reverse(arr,low,high){
    let temp;
    while(low<high){
        temp=arr[high];
        arr[high]=arr[low];
        arr[low]=temp;
        low++;
        high--;
    }
}


function LeftRotate(arr,d){
    let n=arr.length;
    reverse(arr,0,d-1);
    reverse(arr,d,n-1);
    reverse(arr,0,n-1);
    return arr;
}

const arr=[2,6,4,9,3,5];
let d=2;
console.log(LeftRotate(arr,d))

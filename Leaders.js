// Leaders in an array
function Leaders(arr){
    let n = arr.length;
    let leadarr = []
    let leader=arr[n-1]
    leadarr.push(leader)
    for(let i=n-2;i>0;i--){
        if(arr[i]>leader){
            leader=arr[i]
            leadarr.push(leader)
        }else{
            break;
        }
    }
    return leadarr;
}

const arr=[2,10,4,10,6,3,1]
console.log(Leaders(arr));
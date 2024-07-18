// find the second largest element in the array

const SecondLargestEle = (arr) =>{
    let len=arr.length;
    let res = -1 , largest=0;
    for(let i=1;i<len;i++){
        if(arr[i]>arr[largest]){
            res=largest;
            largest=i;
        }else if(arr[i]!==arr[largest]){
            if(res===-1 || arr[i]>arr[res]){
                res=i;
            }
        }
    }
    return arr[res];
}
const arr=[1,4,9,9,8,7];
console.log(SecondLargestEle(arr))

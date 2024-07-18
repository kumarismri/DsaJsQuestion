// write a code to find largest element from the arrayof elements

const Largestele = (arr) => {
   let res=0;
   for(let i=1;i<arr.length;i++){
    if(arr[i]>arr[res]){
        res=i;
    }
   }
   return arr[res];
}
const arr=[3,2,7,12,1,9]
console.log(Largestele(arr))
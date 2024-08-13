// find max profit stock buy and sell problem

function StockBuySell(arr){
    let buy;
    let sell;
    let res=0;
    for(let i=1;i<arr.length;i++){
        buy=arr[i-1];
        sell = arr[i]
        if(buy<sell){
            res=res+(sell-buy);
        }
    }
    return res;
}

const arr=[1,5,3,1,2,8];
console.log(StockBuySell(arr))